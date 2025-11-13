import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Scale } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-28 bg-gray-950 text-white relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-blue-800/30 text-blue-300 px-6 py-2 rounded-full border border-blue-600/30 mb-6 shadow-sm">
            <Scale className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider uppercase">
              {t("contact.sectionTitle")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent">
              {t("contact.heading")}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {t("contact.subheading")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-700 shadow-xl hover:shadow-blue-900/30 transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white">
              {t("contact.officeInfo.title")}
            </h3>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: t("contact.officeInfo.location.label"),
                  value: (
                    <p className="text-blue-100 whitespace-pre-line">
                      {t("contact.officeInfo.location.address")}
                    </p>
                  ),
                },
                {
                  icon: Phone,
                  label: t("contact.officeInfo.phone.label"),
                  value: (
                    <a
                      href="tel:+9771234567"
                      className="hover:text-white transition-colors"
                    >
                      {t("contact.officeInfo.phone.numbers.0")}
                    </a>
                  ),
                },
                {
                  icon: Mail,
                  label: t("contact.officeInfo.email.label"),
                  value: (
                    <a
                      href="mailto:info@lawfirmnepal.com"
                      className="hover:text-white transition-colors"
                    >
                      {t("contact.officeInfo.email.addresses.0")}
                    </a>
                  ),
                },
                {
                  icon: Clock,
                  label: t("contact.officeInfo.hours.label"),
                  value: (
                    <>
                      {t("contact.officeInfo.hours.weekdays")}
                      <br />
                      {t("contact.officeInfo.hours.weekend")}
                    </>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-start group"
                >
                  <div className="bg-blue-900/50 p-3 rounded-xl text-blue-300 mr-5 border border-blue-700/30 group-hover:bg-blue-800/70 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-200 mb-2">
                      {item.label}
                    </h4>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl h-full min-h-[300px] md:min-h-[400px] border border-gray-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.77206499885813!2d83.4662606!3d27.706384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399686f677eae40d%3A0x1c5f3953822e049f!2sSidhdartha%20Lawyer&#39;s%20Chamber!5e0!3m2!1sen!2snp!4v1757915145769!5m2!1sen!2snp"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              title="Our Location"
            ></iframe>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden border border-blue-700/30 shadow-xl"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-10"></div>
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              {t("contact.cta.title")}
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              {t("contact.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <motion.a
                href="tel:+9771234567"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:shadow-blue-500/40 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("contact.cta.buttons.phone")}
              </motion.a>
              <motion.a
                href="mailto:consult@lawfirmnepal.com"
                className="border-2 border-blue-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900/40 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("contact.cta.buttons.email")}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
