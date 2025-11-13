import { motion } from "framer-motion";
import { Trophy, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "../data/awards";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AwardsPage() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === awards.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awards.length - 3 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="awards" className="py-28 bg-gray-900 text-white">
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
            <Trophy className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("awards.sectionTitle")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("awards.heading")}
            </span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t("awards.subheading")}
          </p>
        </motion.div>

        {/* Awards Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / Math.min(awards.length, window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)`,
            }}
          >
            {awards.map((award) => (
              <motion.div
                key={award.id}
                className="w-full flex-shrink-0 px-4"
                style={{
                  width: `${100 / Math.min(awards.length, window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)}%`,
                }}
              >
                <div className="relative group aspect-square overflow-hidden rounded-xl border-2 border-gray-700 hover:border-blue-400 transition-all duration-300">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {award.title}
                      </h3>
                      <p className="text-blue-300 text-sm">
                        {award.awardedBy} ({award.year})
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-900/80 backdrop-blur-sm p-2 rounded-full border border-blue-700/50 shadow-lg">
                    <Award className="w-5 h-5 text-blue-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: awards.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-blue-400 w-6" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
