// firebase/config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// SUBSTITUA PELAS SUAS CREDENCIAIS DO FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyDB8ln02SEbkfzFQVEjiL1hBA1IBeIcwLk",
  authDomain: "loja-roupas-160526.firebaseapp.com",
  projectId: "loja-roupas-160526",
  storageBucket: "loja-roupas-160526.firebasestorage.app",
  messagingSenderId: "1040093537759",
  appId: "1:1040093537759:web:6325387bc4b3eaa4b1106a"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as instâncias dos serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
