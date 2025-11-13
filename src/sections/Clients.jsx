import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { clientsServed } from "../data/clients";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ClientsPage() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  // Add touch support:
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 50) {
    nextSlide();
  }
  if (touchStart - touchEnd < -50) {
    prevSlide();
  }
};

  const slides = [
    ...clientsServed.slice(-3),
    ...clientsServed,
    ...clientsServed.slice(0, 3),
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(3);
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length - 6);
      }, 500);
    }
  }, [currentIndex]);

  return (
    <section id="clients" className="py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-blue-800/30 text-blue-300 px-6 py-2 rounded-full border border-blue-600/30 mb-6">
            <Briefcase className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("clients.sectionTitle")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("clients.heading")}
            </span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t("clients.subheading")}
          </p>
        </motion.div>

        {/* Clients Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transition: isTransitioning ? "transform 0.5s ease" : "none",
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {slides.map((client, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 px-4"
                style={{ width: `${100 / 3}%` }}
              >
                <div className="relative group aspect-square bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 border-gray-700 hover:border-blue-400 transition-all duration-300 flex items-center justify-center p-8">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {client.name}
                      </h3>
                      <p className="text-blue-300 text-sm">{client.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {clientsServed.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(index + 3);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex - 3 === index ? "bg-blue-400 w-6" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
