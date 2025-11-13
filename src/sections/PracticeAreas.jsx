import { motion } from "framer-motion";
import {
  Scale,
  Building2,
  Briefcase,
  Gavel,
  HeartHandshake,
  Landmark,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PracticeAreas() {
  const { t } = useTranslation();

  const areas = [
    {
      icon: <Scale className="w-6 h-6" />,
      title: t("practice.bankingFinance.title"),
      desc: t("practice.bankingFinance.desc"),
      highlights: t("practice.bankingFinance.highlights", { returnObjects: true }),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("practice.corporate.title"),
      desc: t("practice.corporate.desc"),
      highlights: t("practice.corporate.highlights", { returnObjects: true }),
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t("practice.family.title"),
      desc: t("practice.family.desc"),
      highlights: t("practice.family.highlights", { returnObjects: true }),
    },
    {
      icon: <Gavel className="w-6 h-6" />,
      title: t("practice.criminal.title"),
      desc: t("practice.criminal.desc"),
      highlights: t("practice.criminal.highlights", { returnObjects: true }),
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: t("practice.marriage.title"),
      desc: t("practice.marriage.desc"),
      highlights: t("practice.marriage.highlights", { returnObjects: true }),
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: t("practice.tax.title"),
      desc: t("practice.tax.desc"),
      highlights: t("practice.tax.highlights", { returnObjects: true }),
    },
  ];

  return (
    <section id="practice" className="py-28 bg-gray-900 text-white">
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
            <Gavel className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("practice.badge")}
            </span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("practice.heading")}
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t("practice.subtitle")}
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-700"
            >
              <div className="p-6 md:p-8">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-900/50 rounded-lg flex items-center justify-center text-blue-300 mb-4 md:mb-6 group-hover:bg-blue-800 transition-colors border border-blue-700/30">
                  {" "}
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-blue-100 mb-4">{area.desc}</p>
                <ul className="space-y-2">
                  {area.highlights.map((highlight, hi) => (
                    <li key={hi} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-blue-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-blue-100 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-700/30 border-t border-gray-700">
                <a
                  href="#contact"
                  className="text-blue-300 font-medium text-sm hover:text-white flex items-center transition-colors"
                >
                  {t("practice.consultation")}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
