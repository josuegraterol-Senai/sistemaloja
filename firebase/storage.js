// firebase/storage.js
import { storage } from './config.js';
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Função para fazer upload de imagem e retornar URL
export const uploadImagemProduto = async (file) => {
    try {
        const storageRef = ref(storage, `produtos/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        return url;
    } catch (error) {
        console.error("Erro no upload da imagem:", error);
        throw error;
    }
};
