import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Scale } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { 
      q: t('faq.questions.consultation.q'), 
      a: t('faq.questions.consultation.a') 
    },
    { 
      q: t('faq.questions.location.q'), 
      a: t('faq.questions.location.a') 
    },
    { 
      q: t('faq.questions.specialization.q'), 
      a: t('faq.questions.specialization.a') 
    },
    { 
      q: t('faq.questions.fees.q'), 
      a: t('faq.questions.fees.a') 
    },
    { 
      q: t('faq.questions.duration.q'), 
      a: t('faq.questions.duration.a') 
    }
  ];

  return (
    <section id="faq" className="py-28 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-blue-800/30 text-blue-300 px-6 py-2 rounded-full border border-blue-600/30 mb-6">
            <Scale className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t('faq.sectionTitle')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t('faq.heading')}
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t('faq.subheading')}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-700/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3 className="text-lg font-medium text-white">{faq.q}</h3>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                )}
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-blue-100"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-12 text-center text-white relative overflow-hidden border border-blue-700/30"
        >
          <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold mb-4">
              {t('faq.cta.title')}
            </h3>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              {t('faq.cta.description')}
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 text-gray-900 px-8 py-4 rounded-md font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('faq.cta.button')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}