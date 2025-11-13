// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";
import TeamPage from "./pages/Team";
import Articles from "./pages/Articles";
import Footer from "./sections/Footer";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Remove old language classes
    document.body.classList.remove("lang-en", "lang-ne");
    // Add the current language as a class
    document.body.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<TeamPage />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </div>
  );
}
