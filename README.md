# 🚀 Kerem Yıldırım — Developer Portfolio

A modern, high-performance, and fully responsive personal portfolio application built with React and Vite. It features multi-language support (i18n), dynamic theme switching (Dark/Light mode), smooth animations, and a production-ready contact system integrated with Web3Forms API.

---

## 🌍 Live Demo

Check out the live application here:  
👉 **[https://kerem-yildirim.vercel.app](https://kerem-yildirim.vercel.app)**

---

## 📸 Preview

<img width="1848" height="895" alt="Portfolio Preview" src="https://github.com/user-attachments/assets/cc18a6b9-f48e-494c-b785-38c76a108263" />

---

## ✨ Features

- 🌐 **Multi-Language Support (i18n)** — Dynamic language switching between English and Turkish with `react-i18next`.
- 🌓 **Theme Management** — Seamless Dark/Light mode toggle with smooth color transitions.
- 📬 **Interactive Contact Form** — Web3Forms API integration with built-in honeypot spam protection and dynamic status feedback.
- 🎨 **Modern & Minimalist UI** — Elegant layout featuring custom spotlight effects, interactive skill cards, and project showcases.
- ✨ **Scroll Animations** — Smooth page transitions and element reveal effects powered by AOS.
- 📱 **Fully Responsive** — Mobile-first design optimized across mobile, tablet, and desktop viewports.
- ⚡ **Ultra Fast** — Built on Vite for near-instant build times and high lighthouse performance scores.

---

## 🛠️ Tech Stack

| Category                   | Technology              |
| -------------------------- | ----------------------- |
| **Framework**              | React 18                |
| **Build Tool**             | Vite                    |
| **Internationalization**   | i18next + react-i18next |
| **Styling**                | Tailwind CSS            |
| **Contact API**            | Web3Forms REST API      |
| **Animations**             | AOS (Animate On Scroll) |
| **Linting & Code Quality** | Oxlint                  |
| **Package Manager**        | npm                     |

---

## 📁 Project Structure

```text
kerem-yildirim-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Certificates/
│   │   │   └── Certificates.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Header/
│   │   │   └── Header.jsx
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Spotlight.jsx
│   │   ├── LanguageSwitcher/
│   │   │   └── LanguageSwitcher.jsx
│   │   ├── Projects/
│   │   │   └── Projects.jsx
│   │   ├── Skills/
│   │   │   └── Skills.jsx
│   │   ├── TechGridPattern/
│   │   │   └── TechGridPattern.jsx
│   │   └── ThemeSwitcher/
│   │       └── ThemeSwitcher.jsx
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── tr/
│   │       └── translation.json
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── .oxlintrc.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) `>= 9.x`

---

### 1. Clone the Repository

```bash
git clone https://github.com/keremyldrm61/kerem-yildirim-portfolio.git
cd kerem-yildirim-portfolio
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the root directory or copy `.env.example`:

```bash
cp .env.example .env
```

Add your Web3Forms Access Key to the `.env` file:

```bash
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

> [!WARNING]
> Obtain a free Access Key from Web3Forms. Never commit your `.env` file to public version control.

---

### <img width="20" height="20" alt="Web3Forms Image" src="https://github.com/user-attachments/assets/8de3519b-fb5c-4999-b45f-6c787c165359" /> Web3Forms Setup

To enable functional email delivery from the contact form:

1. Visit [Web3Forms](https://web3forms.com/).
2. Enter your email address in the "Create Access Key" field on the homepage.
3. Check your email inbox to retrieve your unique Access Key.
4. Paste the key as the value for `VITE_WEB3FORMS_ACCESS_KEY` in your `.env` file.

---

## 📜 Available Scripts

In the project directory, you can run the following scripts:

| Command           | Description                                                           |
| :---------------- | :-------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with HMR (Hot Module Replacement). |
| `npm run build`   | Bundles the application into static files for production deployment.  |
| `npm run lint`    | Runs Oxlint / ESLint to detect and report code quality issues.        |
| `npm run preview` | Locally previews the production build before deployment.              |

---

## 👨‍💻 Author

**Kerem Yıldırım**

- Full-Stack Developer
- 🌐 [GitHub Profile](https://github.com/keremyldrm61)
- 👔 [LinkedIn Profile](https://www.linkedin.com/in/kerem-yildirim-ky)
- 📧 [keremyldrm1670@gmail.com](mailto:keremyldrm1670@gmail.com)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
