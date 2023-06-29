import { getFirestore, collection, query, getDocs, getDoc, doc } from 'firebase/firestore';
import { initializeFirebase } from './firebase';

// Inicializa o Firebase
initializeFirebase();
// Obtém a instância do Firebase Firestore
const firestore = getFirestore();

export const getUserData = async (userId) => {
  try {
    const userDocRef = doc(firestore, 'users', userId);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      return userDocSnapshot.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter dados do usuário:', error);
    return null;
  }
};

export const getVagas = async () => {
  try {
    const vagasCollectionRef = collection(firestore, 'vagas');
    const vagasQuery = query(vagasCollectionRef);
    const vagasSnapshot = await getDocs(vagasQuery);

    const vagas = [];
    vagasSnapshot.forEach((doc) => {
      vagas.push(doc.data());
    });

    return vagas;
  } catch (error) {
    console.error('Erro ao obter as vagas:', error);
    return [];
  }
};
