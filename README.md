# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})


# 🧠 Brainly

**Second Brain** is a personal productivity web application that lets you save and manage important links from **YouTube** and **Twitter**, acting as your digital memory vault. It’s designed for fast access, minimal distractions, and modern UI — built with a full-stack TypeScript ecosystem.

---

## 🚀 Features

- 📌 Save important links from YouTube and Twitter  
- 🗃️ Categorized storage for quick access  
- 🔐 Authentication using JWT  
- 🔎 Clean, responsive UI built with Tailwind CSS  
- 🧠 Designed as your personal "second brain" to never lose useful content again  

---

## 🛠️ Tech Stack

### 🧩 Frontend
- [React](https://reactjs.org/) (with Hooks)
- [Tailwind CSS](https://tailwindcss.com/)  
- [Axios](https://axios-http.com/) for API requests
- [Vite](https://vitejs.dev/) (optional, if used for fast dev)

### 🔧 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/) (with Mongoose)
- [JWT](https://jwt.io/) for authentication

---

## 📦 Installation

### 🖥 Backend Setup

```bash
npm install




















```
