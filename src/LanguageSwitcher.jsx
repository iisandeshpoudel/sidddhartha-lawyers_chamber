import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Languages, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);

  const handleSwitch = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const langLabel = currentLang === "en" ? "English" : "नेपाली";
  const langFlag = currentLang === "en" ? "🇬🇧" : "🇳🇵";

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200"
      >
        <span className="text-lg">{langFlag}</span>
        {langLabel}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-36 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden z-50"
          >
            <button
              onClick={() => handleSwitch("en")}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 transition ${
                currentLang === "en" ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => handleSwitch("ne")}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100 transition ${
                currentLang === "ne" ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              🇳🇵 नेपाली
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
