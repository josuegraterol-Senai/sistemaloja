// firebase/firestore.js
import { db } from './config.js';
import { 
    collection, 
    addDoc, 
    getDocs, 
    getDoc, 
    doc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PRODUTOS ---

// Adicionar produto (Painel Admin)
export const adicionarProduto = async (produto) => {
    try {
        const docRef = await addDoc(collection(db, "produtos"), produto);
        return docRef.id;
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        throw error;
    }
};

// Listar todos os produtos
export const listarProdutos = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const produtos = [];
        querySnapshot.forEach((doc) => {
            produtos.push({ id: doc.id, ...doc.data() });
        });
        return produtos;
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        throw error;
    }
};

// Obter detalhes de um produto
export const obterProduto = async (id) => {
    try {
        const docRef = doc(db, "produtos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter produto:", error);
        throw error;
    }
};

// --- CARRINHO ---

// Adicionar ao carrinho
export const adicionarAoCarrinho = async (userId, produto) => {
    try {
        const cartRef = doc(db, "carrinhos", userId);
        const cartSnap = await getDoc(cartRef);
        
        let itens = [];
        if (cartSnap.exists()) {
            itens = cartSnap.data().itens || [];
        }
        
        itens.push(produto);
        await setDoc(cartRef, { itens }, { merge: true });
    } catch (error) {
        console.error("Erro ao adicionar ao carrinho:", error);
        throw error;
    }
};

// Obter carrinho do usuário
export const obterCarrinho = async (userId) => {
    const cartRef = doc(db, "carrinhos", userId);
    const cartSnap = await getDoc(cartRef);
    return cartSnap.exists() ? cartSnap.data().itens : [];
};

// --- FAVORITOS ---

// Alternar favorito
export const alternarFavorito = async (userId, produtoId) => {
    const favRef = doc(db, "favoritos", userId);
    const favSnap = await getDoc(favRef);
    
    let favoritos = [];
    if (favSnap.exists()) {
        favoritos = favSnap.data().produtos || [];
    }
    
    if (favoritos.includes(produtoId)) {
        favoritos = favoritos.filter(id => id !== produtoId);
    } else {
        favoritos.push(produtoId);
    }
    
    await setDoc(favRef, { produtos: favoritos });
};

export const obterFavoritos = async (userId) => {
    const favRef = doc(db, "favoritos", userId);
    const favSnap = await getDoc(favRef);
    return favSnap.exists() ? favSnap.data().produtos : [];
};
