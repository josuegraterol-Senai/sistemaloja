// js/main.js
import { observarAutenticacao, logoutUsuario } from '../firebase/auth.js';

const linkLogin = document.getElementById('link-login');
const linkPerfil = document.getElementById('link-perfil');
const linkAdmin = document.getElementById('link-admin');
const btnLogout = document.getElementById('btn-logout');

observarAutenticacao((user) => {
    if (user) {
        // Usuário logado
        if(linkLogin) linkLogin.classList.add('hidden');
        if(linkPerfil) linkPerfil.classList.remove('hidden');
        if(btnLogout) btnLogout.classList.remove('hidden');
        
        // Exemplo simples: se o email for admin@loja.com, mostra o link de admin
        if (user.email === 'admin@loja.com') {
            if(linkAdmin) linkAdmin.classList.remove('hidden');
        }
    } else {
        // Usuário deslogado
        if(linkLogin) linkLogin.classList.remove('hidden');
        if(linkPerfil) linkPerfil.classList.add('hidden');
        if(linkAdmin) linkAdmin.classList.add('hidden');
        if(btnLogout) btnLogout.classList.add('hidden');
    }
});

if (btnLogout) {
    btnLogout.addEventListener('click', async () => {
        await logoutUsuario();
        window.location.href = '../index.html';
    });
}
