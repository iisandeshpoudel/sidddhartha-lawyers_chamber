import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-b from-blue-950 via-blue-950/95 to-gray-900 text-blue-100 pt-20 pb-10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center">
              <Scale className="w-8 h-8 mr-2 text-blue-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                LegalNepal
              </span>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              {t("footer.brand.description")}
            </p>
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-blue-900/30 rounded-full hover:bg-blue-800/50 transition-all shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  <span className="sr-only">Social {item}</span>
                  <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              {t("footer.links.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-400 rounded"></span>
            </h3>
            <ul className="space-y-3">
              {t("footer.links.items", { returnObjects: true }).map(
                (link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center text-blue-200/80 hover:text-blue-300 transition-all group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                      {link.name}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              {t("footer.practiceAreas.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-400 rounded"></span>
            </h3>
            <ul className="space-y-3">
              {t("footer.practiceAreas.items", { returnObjects: true }).map(
                (area, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#practice"
                      className="flex items-center text-blue-200/80 hover:text-blue-300 transition-all group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                      {area}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
              {t("footer.contactInfo.title")}
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-blue-400 rounded"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mt-0.5 mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200/80 whitespace-pre-line">
                  {t("footer.contactInfo.address")}
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mt-0.5 mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200/80">
                  {t("footer.contactInfo.phone")}
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mt-0.5 mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200/80">
                  {t("footer.contactInfo.email")}
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mt-0.5 mr-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200/80 whitespace-pre-line">
                  {t("footer.contactInfo.hours.weekdays")}
                  <br />
                  {t("footer.contactInfo.hours.weekend")}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider with glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-blue-900/50 my-12 relative"
        >
          <span className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full shadow-md"></span>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-200/60 text-sm text-center md:text-left"
          >
            {t("footer.legal.copyright", {
              year: new Date().getFullYear(),
            })}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {t("footer.legal.links", { returnObjects: true }).map(
              (link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-200/60 hover:text-blue-300 text-sm transition-all"
                >
                  {link}
                </a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
