import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { useTranslation } from "react-i18next";

export default function TestimonialsPage() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-28 bg-gray-900 text-white">
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
            <Quote className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t("testimonials.sectionTitle")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("testimonials.heading")}
            </span>
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t("testimonials.subheading")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 hover:shadow-lg transition-all"
            >
              // Scale rating stars:
              <div className="flex mb-4">
                {[...Array(5)].map((_, star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 md:w-5 md:h-5 ${star < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-300/30 mb-4" />
              <p className="text-blue-100 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-blue-300 text-sm">{testimonial.position}</p>
                <p className="text-blue-100/50 text-xs mt-1">
                  {testimonial.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
