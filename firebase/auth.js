// firebase/auth.js
import { auth } from './config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const googleProvider = new GoogleAuthProvider();

// Função para login com Google
export const loginGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error("Erro no login Google:", error.message);
        throw error;
    }
};

// Função para cadastrar novo usuário
export const cadastrarUsuario = async (email, senha) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        return userCredential.user;
    } catch (error) {
        console.error("Erro ao cadastrar:", error.message);
        throw error;
    }
};

// Função para login
export const loginUsuario = async (email, senha) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        return userCredential.user;
    } catch (error) {
        console.error("Erro ao fazer login:", error.message);
        throw error;
    }
};

// Função para logout
export const logoutUsuario = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Erro ao fazer logout:", error.message);
        throw error;
    }
};

// Observar mudanças no estado de autenticação
export const observarAutenticacao = (callback) => {
    onAuthStateChanged(auth, callback);
};
