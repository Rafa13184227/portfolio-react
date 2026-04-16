# 👨‍💻 Rafael Hoyos — Portfolio Personal

[
[
[
[

Portfolio personal desarrollado con **React 18 + Vite**, con dark mode, animaciones CSS, formulario de contacto funcional y deploy en Vercel.

🌐 **Demo en vivo:** [rafaelhoyos.vercel.app](https://rafaelhoyos.vercel.app/)

***

## ✨ Características

- 🌙 **Dark mode** persistente con `localStorage` y CSS variables
- 📱 **100% responsive** — diseño mobile-first
- 🍔 **Navbar con hamburger menu** animado para móvil
- 🎨 **Animaciones CSS** — fade-in, hover effects, morphing blob
- 📬 **Formulario de contacto** funcional con [EmailJS](https://www.emailjs.com/)
- ⚡ **Vite 8** — build ultrarrápido
- 🗂️ **CSS Modules** — estilos encapsulados por componente
- 🔗 **React Router 6** — navegación SPA

***

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | React 18 |
| Build tool | Vite 8 |
| Routing | React Router 6 |
| Estilos | CSS Modules |
| Formulario | EmailJS |
| Deploy | Vercel |
| Control de versiones | Git + GitHub |

***

## 📁 Estructura del Proyecto

```
portfolio-react/
├── public/
│   └── foto-perfil.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Projects.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.local          # Variables de entorno (no incluido en el repo)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

***

## 🚀 Instalación y uso local

### Prerrequisitos

- Node.js >= 18
- npm >= 9
- Git

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/Rafa13184227/portfolio-react.git

# 2. Entra a la carpeta
cd portfolio-react

# 3. Instala dependencias
npm install

# 4. Crea el archivo de variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de EmailJS

# 5. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

***

## 🔧 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Obtén estas credenciales creando una cuenta gratuita en [emailjs.com](https://www.emailjs.com/).

***

## 📦 Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo en localhost:5173
npm run build    # Genera build de producción en /dist
npm run preview  # Previsualiza el build de producción
npm run lint     # Ejecuta ESLint
```

***

## 🌐 Deploy en Vercel

El proyecto está configurado para deploy automático en Vercel.

1. Importa el repositorio en [vercel.com](https://vercel.com/)
2. Vercel detecta automáticamente la configuración de Vite
3. Agrega las variables de entorno en **Project Settings → Environment Variables**
4. Cada push a `main` genera un nuevo deploy automáticamente

***

## 📬 Configuración de EmailJS

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com/)
2. Conecta un **Email Service** (Gmail recomendado)
3. Crea un **Email Template** con las variables `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copia las credenciales a tu `.env.local`

***

## 🤝 Contacto

**Rafael Hoyos**
- 🌐 Portfolio: [rafaelhoyos.vercel.app](https://rafaelhoyos.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/rafael-hoyosa](https://www.linkedin.com/in/rafael-hoyosa/)
- 🐙 GitHub: [github.com/Rafa13184227](https://github.com/Rafa13184227)
- 📧 Email: rafa131842@gmail.com

***

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](./LICENSE) para más detalles.

***

<p align="center">
  Construido con ❤️ usando React + Vite | Manizales, Colombia 🇨🇴
</p>