import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Handshake,
  Award,
  Clock,
  Bookmark,
  Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import AwardsPage from "./Awards";
import ClientsPage from "./Clients";

export default function WhyUs() {
  const { t } = useTranslation();

  const points = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("whyUs.points.experienced.title"),
      desc: t("whyUs.points.experienced.desc"),
      highlight: t("whyUs.points.experienced.highlight"),
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: t("whyUs.points.clientFirst.title"),
      desc: t("whyUs.points.clientFirst.desc"),
      highlight: t("whyUs.points.clientFirst.highlight"),
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t("whyUs.points.trackRecord.title"),
      desc: t("whyUs.points.trackRecord.desc"),
      highlight: t("whyUs.points.trackRecord.highlight"),
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t("whyUs.points.ethical.title"),
      desc: t("whyUs.points.ethical.desc"),
      highlight: t("whyUs.points.ethical.highlight"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("whyUs.points.timely.title"),
      desc: t("whyUs.points.timely.desc"),
      highlight: t("whyUs.points.timely.highlight"),
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: t("whyUs.points.support.title"),
      desc: t("whyUs.points.support.desc"),
      highlight: t("whyUs.points.support.highlight"),
    },
  ];

  const partners = [
    { name: "Nepal Bar Association", logo: "/nepal-bar-association.jpeg" },
    { name: "High Court Bar", logo: "/highcourt.jpg" },
    { name: "Nepal Bar Council", logo: "/nepal-bar-council.jpg" },
  ];

  return (
    <section id="whyus" className="py-28 bg-gray-900 text-white">
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
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("whyUs.sectionTitle")}
            </span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("whyUs.heading")}
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t("whyUs.subheading")}
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-300 mb-6 group-hover:bg-blue-800 transition-colors border border-blue-700/30">
                {point.icon}
              </div>
              <div className="absolute top-6 right-6 bg-blue-800/50 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-700/30">
                {point.highlight}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-blue-100">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-blue-800/30 text-blue-300 p-3 rounded-full border border-blue-600/30 mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-3">
              {t("whyUs.partners.title")}
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {t("whyUs.partners.description")}
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700/50 flex flex-col items-center text-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
                <p className="mt-4 text-sm md:text-base font-medium text-blue-200">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AwardsPage />
        <ClientsPage />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 md:p-10 lg:p-12 text-center text-white relative overflow-hidden border border-blue-700/30"
        >
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">
              {t("whyUs.cta.title")}
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              {t("whyUs.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-gray-900 px-8 py-4 rounded-md font-medium hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("whyUs.cta.consultationBtn")}
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="border-2 border-blue-400 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-900/30 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("whyUs.cta.callBtn")}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
