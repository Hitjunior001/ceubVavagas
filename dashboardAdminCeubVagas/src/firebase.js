import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

// Inicializa o app do Firebase

const firebaseApp = initializeApp(firebaseConfig);

export const initializeFirebase = () => {
  return firebaseApp;
};
