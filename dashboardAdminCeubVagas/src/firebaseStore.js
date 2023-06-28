import { getFirestore, doc, getDoc } from 'firebase/firestore';

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
