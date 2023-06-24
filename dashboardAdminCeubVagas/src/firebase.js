import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC19OJd681Vj-fyVcjWVsvov53Eu5INkHM",
    authDomain: "ceub-vagas.firebaseapp.com",
    projectId: "ceub-vagas",
    storageBucket: "ceub-vagas.appspot.com",
    messagingSenderId: "176582801809",
    appId: "1:176582801809:web:339e7c3db6ca405bfd8230",
    measurementId: "G-8S6P82Q8Q4"
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  };

// Inicializa o app do Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

// Obtém a instância do Firebase Authentication
const auth = getAuth();

// Obtém a instância do Firebase Firestore
const firestore = getFirestore();

// Função para verificar se o usuário é um administrador
export const checkAdmin = async (userId) => {
    try {
      const isAdmin = await checkAdminById(userId);
      if (isAdmin) {
        return true;
      }
      const userDocRef = doc(firestore, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);
  
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        return userData.admin === true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Erro ao verificar se o usuário é um administrador:', error);
      return false;
    }
  };
  export const checkAdminById = async (userId) => {
    try {
      const adminDocRef = doc(firestore, 'admins', userId);
      const adminDocSnapshot = await getDoc(adminDocRef);
      return adminDocSnapshot.exists();
    } catch (error) {
      console.error('Erro ao verificar se o usuário é um administrador pelo ID:', error);
      return false;
    }
  };

// Função para autenticar o administrador
export const signInAdmin = async (email, password) => {
  try {
    // Autentica o administrador usando o email e senha fornecidos
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Verifica se o usuário autenticado é um administrador
    const isAdmin = await checkAdmin(userCredential.user.uid);

    if (isAdmin) {
      // Admin autenticado com sucesso
      console.log('Admin autenticado:', userCredential.user.uid);
      return true;
    } else {
      // Usuário não é um administrador
      console.log('Acesso negado. Usuário não é um administrador.');
      return false;
    }
  } catch (error) {
    console.error('Erro ao autenticar administrador:', error);
    return false;
  }
};
