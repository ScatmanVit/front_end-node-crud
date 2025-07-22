
# Front-End Vanilla para CRUD de Usuários

Este projeto é o **front-end** para a API Node.js [API Node CRUD]([https://github.com/ScatmanVit/pratica_](https://github.com/ScatmanVit/pratica_api_node-crud-users)).  
Ele foi desenvolvido com **HTML, CSS e JavaScript puro (Vanilla JS)**, com foco em **boas práticas**, **organização modular** e **integração com back-end real** usando **Axios**.

---

## ✨ Funcionalidades

- **Cadastro de usuários** integrado com API Node.js
- **Tratamento inteligente de erros no cadastro**:
  - Caso o usuário insira e-mail e senha, mas não informe nome, o sistema exibe um modal perguntando se deseja usar o primeiro nome do e-mail ou voltar e preencher manualmente
- **Feedback visual** com:
  - **Toastify** para mensagens dinâmicas
  - **Modais customizados**
- **Login funcional**:
  - Recebe token JWT do back-end
  - Exibe feedback de sucesso ou erro com Toastify
- **Organização modular**:
  - Funções reutilizáveis (toasts, validações, modais) centralizadas na pasta `utils`
- **Design responsivo e usabilidade pensada**
- **Ícones com Font Awesome**

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3** (design responsivo e estilização manual)
- **JavaScript (ES6+)**
- **Axios** (consumo da API back-end)
- **Toastify** (notificações visuais)
- **Font Awesome** (ícones)
- **Modais customizados** para UX avançada

---


## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3**
- **JavaScript (ES6+)**
- **Axios** (consumo de API)
- **Toastify** (notificações)
- **Font Awesome** (ícones)

---

## 📂 Estrutura do Projeto

```plaintext
front-end-node-crud/
├── assets/             # Arquivos de mídia e imagens (SVG, ícones, etc.)
│   └── undraw_my-password_iyga.svg
├── config/             # Configurações globais (como URL da API)
│   └── url_api.js
├── css/                # Estilos CSS organizados por página
│   ├── index.css
│   ├── list-users.css
│   ├── login.css
│   └── profile.css
├── pages/              # Páginas HTML completas
│   ├── list-users.html
│   ├── login.html
│   └── profile-user.html
├── services/           # Lógica de cada página (requisições e manipulação de dados)
│   ├── list-users/
│   │   └── list-users.js
│   ├── login.js
│   ├── logout.js
│   ├── profile.js
│   └── register.js
├── utils/              # Funções reutilizáveis e interações de UI
│   ├── choose-modal.js
│   ├── show-sequence-toast.js
│   ├── toast.js
│   └── validation.js
├── .gitignore          # Arquivos e pastas ignoradas pelo Git
├── index.html          # Página inicial (gateway da aplicação)
└── README.md           # Documentação geral do projeto

```

## 🚀 Como Executar
- 1 Clone este repositório:

```bash
git clone https://github.com/seu-usuario/front-end-node-crud.git
```

- 2 Abra os arquivos HTML no navegador ou use uma extensão como Live Server no VSCode.

- 3 Certifique-se de que a API back-end (Node.js) está rodando.
  - 👉 Link do back-end [BACK-END](https://github.com/ScatmanVit/pratica_api_node-crud-users)

- 4 Configure a URL base da API no arquivo utils/api.js (ou equivalente):
```bash
const API_BASE_URL = "nome-url";
```

---

## 👤 Autor
Victor Ribeiro Baradel
Feito com ☕
