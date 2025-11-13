import { motion } from "framer-motion";
import { ChevronDown, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-gray-900 overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/legal-pattern.png')] opacity-10 bg-[length:120px_120px]"></div>
        
        {/* Animated scales of justice */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-10 md:opacity-20"
          animate={{ rotate: 5 }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Scale className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 text-blue-300" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Professional badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm text-blue-100 px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-6 md:mb-8 border border-blue-300/30"
          >
            <Scale className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-blue-200">{t("hero.heading.part1")}</span>{" "}
            {t("hero.heading.part2")} <br />
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("hero.heading.part3")}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-md font-medium hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                {t("hero.cta1")}
              </span>
            </motion.a>
            <motion.a 
              href="#practice" 
              className="border-2 border-blue-400 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-900/30 transition-all duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="group-hover:tracking-wider transition-all duration-300">
                {t("hero.cta2")}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Scroll Indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1,
          y: [0, 15, 0],
        }}
        transition={{ 
          delay: 1.2,
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center">
          <ChevronDown className="w-8 h-8 text-blue-300" />
          <span className="text-xs text-blue-300 mt-1 tracking-widest">
            {t("hero.scroll")}
          </span>
        </div>
      </motion.a>
    </section>
  );
}
