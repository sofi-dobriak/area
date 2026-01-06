# 📌 Area — Promo Page

Area is a lightweight static promo website built with a modern frontend toolchain.
The project is based on a vanilla app setup and focuses on fast development, clean structure, and easy maintenance.

## ✨ Overview

Area is designed as a promotional landing page to showcase a product or service.
It uses Pug for templating, SCSS for styling, and Vite for fast builds and hot reload during development.

🔗 [Live Demo](https://area-ebon.vercel.app/)

---

## ✨ Features
- 🏠 **Home page** with company benefits and a clear Get Started CTA leading to the teachers catalog

![Home page](./public/images/learn-lingo-home-page.png)


- 📑 **Teachers catalog** with:
  - filtering by language, student level, and price per hour
  - Load More button to fetch additional teachers from Firebase
  - “❤️” button to add/remove favorites (state saved after refresh)
  - Read more toggle for detailed teacher info and reviews

![Teachers page](./public/images/learn-lingo-teachers-page.png)

- 🚐 **Favorites page (private)**:
  - shows all saved teachers
  - accessible only to authorized users

![Favorite teachers page](./public/images/learn-lingo-fav-page.png)

- 🚐 **Modals**:
  - **Login / Register** with validation (react-hook-form + yup)

![Login and register forms](./public/images/learn-lingo-login-register-form.png)

  - **Book trial lesson** form with validation
  - **Extra dialogs**: success booking message, login info, mobile menu & filters, logout confirmation

![Booking trial lesson  and extra forms](./public/images/learn-lingo-extra-form.png)

---

- 🔗 Routing:
  - `/` — Home page
  - `/teachers` — Teachers page
  - `/favorites` — Favorites page (private)
  - `*` — Not Found Page

---

## 🛠️ Tech Stack
  - ⚡ Vite + React + TypeScript
  - 🔄 Redux Toolkit & redux-persist for state management
  - 🔐 Firebase (Authentication + Realtime Database)
  - 🌐 React Router v7 for routing & private routes
  - 🎣 react-hook-form + yup for forms and validation
  - 🎨 CSS Modules, clsx, modern-normalize
  - ✨ UI helpers: react-icons, react-hot-toast, react-select, react-responsive, react-spinners

---

## 🚀 Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sofi-dobriak/learn-lingo.git
2. Navigate to the project folder:
    ```bash
    cd learn-lingo
3. Install dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm run dev
5. Open in your browser:
    ```bash
    http://localhost:5173
---

## 💻 My other projects

### 🚐 Travel Trucks App

[Demo](https://travel-trucks-eosin-iota.vercel.app/) |
[Github](https://github.com/sofi-dobriak/travel-trucks)

---

👩‍💻 Author: Sofi Dobriak

