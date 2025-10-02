# AtletaPro

Plataforma para la gestión y optimización del rendimiento de atletas de alto nivel, utilizando inteligencia artificial y análisis de datos.

## Características

- Planes personalizados de entrenamiento y nutrición.
- Panel de administración y gestión de equipo.
- Interfaz moderna y responsiva.
- Animaciones y efectos visuales para mejor experiencia de usuario.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/santilc0209/AtletaPro.git
   cd AtletaPro
   ```

2. Instala las dependencias del frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Inicia el servidor de desarrollo del frontend:

   ```bash
   npm run dev
   ```

4. Instala las dependencias del backend:

   ```bash
   cd ../backend
   npm install
   ```

5. Inicia el servidor del backend:

   ```bash
   node ../index.js
   # o si usas server.js
   node server.js
   ```

## Estructura del proyecto

```
GerenciaDeProyectosAtletaPro/
├── backend/
│   ├── db.js
│   ├── server.js
│   └── routes/
│       ├── auth.js
│       └── deportes.js
├── frontend/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── AuthContext.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       │   └── react.svg
│       ├── components/
│       │   ├── BackButton.jsx
│       │   ├── button.jsx
│       │   ├── card.jsx
│       │   ├── Navbar.jsx
│       │   └── SportCard.jsx
│       └── pages/
│           ├── Dashboard.css
│           ├── Dashboard.jsx
│           ├── DeporteDetalle.jsx
│           ├── Home.css
│           ├── Home.jsx
│           ├── login.jsx
│           ├── PerfilUsuario.jsx
│           ├── Register.css
│           └── Register.jsx
├── index.js
├── node_modules/
├── package-lock.json
├── package.json
```

## Tecnologías

- React
- Vite
- Tailwind CSS
- Node.js
- Express
- MySQL

## Contribuir

1. Haz un fork del repositorio.
2. Crea una rama nueva:  
   `git checkout -b feature/nueva-funcionalidad`
3. Haz tus cambios y realiza un commit.
4. Haz push a tu rama y abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia ISC.

---

**Contacto:**
