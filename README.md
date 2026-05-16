# Loja de Roupas Online (Estrutura Básica)

Este é um projeto de e-commerce simples focado em estrutura e funcionalidade básica, utilizando **HTML**, **JavaScript** e **Firebase**.

## 🚀 Tecnologias
- **HTML5 / CSS3**: Estrutura e estilo básico.
- **JavaScript (Vanilla)**: Lógica das funcionalidades.
- **Firebase Authentication**: Gestão de usuários.
- **Firebase Firestore**: Banco de dados NoSQL para produtos, carrinho e favoritos.
- **Firebase Storage**: Armazenamento de imagens dos produtos.

## 📂 Estrutura de Pastas
- `index.html`: Página principal (catálogo).
- `pages/`: Outras páginas do sistema (Login, Carrinho, Produto, Admin, Perfil).
- `components/`: Snippets HTML (header, footer).
- `firebase/`: Configuração e funções utilitárias do Firebase.
- `js/`: Lógica JavaScript específica.
- `assets/`: Arquivos estáticos (CSS, Imagens).

## ⚙️ Como Configurar

1. **Crie um projeto no Firebase Console**:
   - Acesse [Firebase Console](https://console.firebase.google.com/).
   - Ative o **Authentication** (Email/Senha).
   - Ative o **Firestore Database** (em modo de teste ou configure as regras).
   - Ative o **Storage** (em modo de teste ou configure as regras).

2. **Configure as credenciais**:
   - No arquivo `firebase/config.js`, substitua os valores do objeto `firebaseConfig` pelas chaves do seu projeto.

3. **Defina um Administrador**:
   - No arquivo `js/main.js` e `pages/admin.html`, o email `admin@loja.com` está configurado como exemplo para acessar o painel admin. Você pode alterar para o seu email de cadastro.

4. **Regras do Firestore/Storage**:
   - Certifique-se de que as regras permitem leitura/escrita conforme necessário durante o desenvolvimento.

## 🌐 Deploy na Vercel
1. Envie o código para um repositório no GitHub.
2. No dashboard da Vercel, importe o repositório.
3. A Vercel detectará o projeto como estático automaticamente.
4. Clique em **Deploy**.

## 📝 Notas
- O projeto não utiliza frameworks complexos para facilitar o entendimento de iniciantes.
- A estrutura está pronta para receber melhorias de CSS e novas funcionalidades.
