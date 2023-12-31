import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeFirebase } from "./firebase";

// Inicializa o Firebase
initializeFirebase();

// Obtém a instância do Firebase Authentication
const auth = getAuth();

//OBTER O ID DO USUARIO
export const getAuthenticatedUserId = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user.uid);
      } else {
        reject(new Error('Usuário não autenticado'));
      }
    });
  });
};

// Função para obter o Token do usuário autenticado
export const getAuthenticatedTokenId = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        user
          .getIdToken()
          .then((token) => {
            resolve(token);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error("Usuário não autenticado"));
      }
    });
  });
};

export const signIn = async (email, password) => {
  try {
    // Autentica o usuário usando o email e senha fornecidos
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao autenticar usuário:", error);
    return null;
  }
};

export const signOut = async () => {
  try {
    // Desconecta o usuário
    await auth.signOut();
    console.log("Usuário deslogado")
    return true;
  } catch (error) {
    console.error("Erro ao desconectar usuário:", error);
    return false;
  }
};
