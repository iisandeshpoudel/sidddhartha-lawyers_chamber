import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Users,
  Scale,
  Linkedin,
  Twitter,
  Mail,
  Gavel,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  const stats = [
    {
      value: "15+",
      label: t("about.stats.years"),
      icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />,
    },
    {
      value: "500+",
      label: t("about.stats.cases"),
      icon: <Scale className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />,
    },
    {
      value: "98%",
      label: t("about.stats.satisfaction"),
      icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />,
    },
    {
      value: "20+",
      label: t("about.stats.awards"),
      icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />,
    },
  ];

  const teamMembers = [
    {
      name: "Adv. Rajesh Shrestha",
      role: "Managing Partner",
      bio: "Specializes in corporate law with 18 years of experience in business litigation and transactions.",
      img: "/lawyer1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:rajesh@legalnepal.com",
      },
    },
    {
      name: "Adv. Sita Koirala",
      role: "Corporate Lawyer",
      bio: "Expert in mergers & acquisitions with a focus on cross-border transactions.",
      img: "/lawyer2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:sita@legalnepal.com",
      },
    },
    {
      name: "Adv. Bikash Thapa",
      role: "Litigation Specialist",
      bio: "Seasoned trial lawyer with a track record of successful criminal defense cases.",
      img: "/lawyer3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mailto:bikash@legalnepal.com",
      },
    },
  ];

  return (
    <section id="about" className="py-16 md:py-28 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center bg-blue-800/30 text-blue-300 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-blue-600/30 mb-4 md:mb-6 text-xs md:text-sm">
            <Gavel className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            <span className="font-medium tracking-wider">
              {t("about.sectionTitle")}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
              {t("about.heading")}
            </span>
          </h1>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto px-4">
            {t("about.subheading")}
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-700">
              <img
                src="/about.jpg"
                alt="Our Law Firm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>
            </div>
            <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-gray-800/50 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg w-4/5 md:w-3/4 border border-gray-700">
              <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">
                {t("about.mission.title")}
              </h3>
              <p className="text-blue-200 text-xs md:text-sm">
                {t("about.mission.description")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                {t("about.legacy.title")}
              </span>
            </h2>
            <div className="text-blue-200 mb-6 md:mb-8 space-y-4">
              {Array.isArray(
                t("about.legacy.paragraphs", { returnObjects: true })
              ) ? (
                t("about.legacy.paragraphs", { returnObjects: true }).map(
                  (paragraph, index) => <p key={index} className="text-sm md:text-base">{paragraph}</p>
                )
              ) : (
                <p className="text-sm md:text-base">{t("about.legacy.paragraphs")}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-3 md:p-4 lg:p-5 rounded-xl border border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-900/50 p-1.5 md:p-2 rounded-lg text-blue-300 mr-2 md:mr-3 lg:mr-4 border border-blue-700/30">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white">
                        {stat.value}
                      </h4>
                      <p className="text-blue-300 text-xs md:text-sm">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-blue-800/30 text-blue-300 px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-blue-600/30 mb-4 md:mb-6 text-xs md:text-sm">
              <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              <span className="font-medium tracking-wider">
                {t("about.team.sectionTitle")}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                {t("about.team.heading")}
              </span>
            </h2>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto px-4">
              {t("about.team.subheading")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, i) => {
              const lastName = member.name.split(" ")[2] || member.name.split(" ")[1];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-square mb-4 border border-gray-700">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-800/20 to-transparent flex items-end p-4 md:p-6">
                      <div>
                        <h3 className="text-white text-xl md:text-2xl font-semibold">
                          {member.name}
                        </h3>
                        <p className="text-blue-300 text-sm md:text-base">{member.role}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 flex space-x-1 md:space-x-2">
                      <a
                        href={member.social.linkedin}
                        className="bg-white/90 text-blue-700 p-1.5 md:p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/90 text-blue-700 p-1.5 md:p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100"
                        aria-label={`Follow ${member.name} on Twitter`}
                      >
                        <Twitter className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                      <a
                        href={member.social.email}
                        className="bg-white/90 text-blue-700 p-1.5 md:p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm md:text-base mb-3 md:mb-4">{member.bio}</p>
                    <a
                      href="#contact"
                      className="text-blue-300 font-medium hover:text-white inline-flex items-center transition-colors text-sm md:text-base"
                    >
                      {t("about.team.contact", { lastName })}
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 ml-1"
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
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 md:p-8 lg:p-12 text-center text-white"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
              {t("about.cta.title")}
            </h3>
            <p className="text-blue-100 text-sm md:text-base lg:text-lg mb-6 md:mb-8">
              {t("about.cta.description")}
            </p>
            <motion.a
              href="mailto:careers@legalnepal.com"
              className="inline-block bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("about.cta.button")}
            </motion.a>
          </div>
        </motion.div>

        {/* Mobile Contact Info */}
        <div className="mt-12 md:hidden bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-white text-center">Get In Touch</h3>
          <div className="space-y-3">
            <div className="flex items-center text-blue-200">
              <Phone className="w-5 h-5 mr-3 text-blue-300" />
              <span>+977 1 4123456</span>
            </div>
            <div className="flex items-center text-blue-200">
              <Mail className="w-5 h-5 mr-3 text-blue-300" />
              <span>info@legalnepal.com</span>
            </div>
            <div className="flex items-start text-blue-200">
              <MapPin className="w-5 h-5 mr-3 mt-0.5 text-blue-300" />
              <span>123 Legal Road, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}