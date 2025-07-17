
# Front-End Vanilla para CRUD de Usuários

Este projeto é o **front-end** para a API Node.js [API Node CRUD](link-da-api-se-tiver).  
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

## 📂 Estrutura do Projeto

## 🛠️ Tecnologias Utilizadas

- **HTML5** e **CSS3**
- **JavaScript (ES6+)**
- **Axios** (consumo de API)
- **Toastify** (notificações)
- **Font Awesome** (ícones)

---

## 📂 Estrutura do Projeto ( INCOMPLETA - em desenvolvimento)

```plaintext
front-end-node-crud/
├── css/              # Estilos do projeto
├── utils/             # Funções utilitárias (Toast, validações, etc.)
├── services/
│   ├── register.js   # Lógica da página de cadastro
│   ├── login.js      # Lógica da página de login
├── index.html        # Página inicial
├── register.html     # Tela de cadastro
├── login.html        # Tela de login
├── pages             # **em breve mais telas**
└── README.md
```

## 🚀 Como Executar
- 1 Clone este repositório:

```bash
git clone https://github.com/seu-usuario/front-end-node-crud.git
```

- 2 Abra os arquivos HTML no navegador ou use uma extensão como Live Server no VSCode.

- 3 Certifique-se de que a API back-end (Node.js) está rodando.
  - 👉 Link do back-end(em breve) 

- 4 Configure a URL base da API no arquivo utils/api.js (ou equivalente):
```bash
const API_BASE_URL = "nome-url";
```

---

## 👤 Autor
Victor Ribeiro Baradel
