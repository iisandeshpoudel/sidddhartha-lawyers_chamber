import { motion } from "framer-motion";
import { CalendarDays, Clock, User, BookOpen } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Insights() {
  const { t } = useTranslation();
  
  const posts = [
    { 
      title: t('insights.posts.businessLaw.title'),
      desc: t('insights.posts.businessLaw.desc'), 
      img: "/blog1.jpg",
      date: "May 15, 2025",
      author: "Rajesh Shrestha",
      readTime: "5 min read"
    },
    { 
      title: t('insights.posts.familyLaw.title'), 
      desc: t('insights.posts.familyLaw.desc'),
      img: "/blog2.jpg",
      date: "April 28, 2025",
      author: "Sita Koirala",
      readTime: "7 min read"
    },
    { 
      title: t('insights.posts.criminalJustice.title'), 
      desc: t('insights.posts.criminalJustice.desc'),
      img: "/blog3.jpg",
      date: "March 10, 2025",
      author: "Bikash Thapa",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="insights" className="py-28 bg-gray-900 text-white">
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
            <BookOpen className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider">
              {t('insights.sectionTitle')}
            </span>
          </div>
          <h2 className="text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t('insights.heading')}
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            {t('insights.subheading')}
          </p>
        </motion.div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-6 border border-gray-700">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                  <div className="flex space-x-4 text-blue-200 text-sm">
                    <span className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-blue-100 mb-4">{post.desc}</p>
                <div className="flex items-center text-sm text-blue-300">
                  <User className="w-4 h-4 mr-2" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}