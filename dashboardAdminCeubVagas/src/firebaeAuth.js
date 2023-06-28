import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Obtém a instância do Firebase Authentication
const auth = getAuth();

export const signIn = async (email, password) => {
  try {
    // Autentica o usuário usando o email e senha fornecidos
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Erro ao autenticar usuário:', error);
    return null;
  }
};

export const signOut = async () => {
  try {
    // Desconecta o usuário
    await auth.signOut();
    return true;
  } catch (error) {
    console.error('Erro ao desconectar usuário:', error);
    return false;
  }
};
