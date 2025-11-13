import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { motion } from "framer-motion";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (location.pathname === "/") {
        const sections = ["home", "practice", "whyus", "contact"];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/`;
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "practice", label: "Practice Areas" },
    { id: "whyus", label: "Why Us" },
    { id: "contact", label: "Contact" },
    { to: "/about", label: "About Us" },
    { to: "/articles", label: "Articles" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-950/95 backdrop-blur-lg shadow-md py-2 border-b border-blue-900"
          : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center flex-nowrap text-2xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent whitespace-nowrap mr-8"
        >
          <Scale className="w-6 h-6 mr-2 text-blue-300 flex-shrink-0" />
          Siddhartha Lawyers Chamber
        </NavLink>

        {/* Right side navigation */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? "text-blue-300 bg-blue-900/30"
                      : "text-blue-100 hover:text-blue-300 hover:bg-blue-900/20"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-blue-300 bg-blue-900/30"
                    : "text-blue-100 hover:text-blue-300 hover:bg-blue-900/20"
                }`}
              >
                {item.label}
              </button>
            )
          )}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            Free Consultation
          </a>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <motion.div
          className="md:hidden bg-blue-950 shadow-xl rounded-b-2xl flex flex-col p-4 space-y-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navItems.map((item) =>
            item.to ? (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg whitespace-nowrap ${
                    isActive
                      ? "text-blue-300 bg-blue-900/30 font-medium"
                      : "text-blue-100 hover:text-blue-300 hover:bg-blue-900/20"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-3 rounded-lg text-left whitespace-nowrap ${
                  activeSection === item.id
                    ? "text-blue-300 bg-blue-900/30 font-medium"
                    : "text-blue-100 hover:text-blue-300 hover:bg-blue-900/20"
                }`}
              >
                {item.label}
              </button>
            )
          )}
          <a
            href="#contact"
            className="mt-2 block px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Free Consultation
          </a>
          <div className="px-4">
            <LanguageSwitcher />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
