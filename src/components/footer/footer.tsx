import { Link } from "react-router-dom";
import myLogo from "/c.svg";
import SocialMedia from "../socialMedia";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "About Me",
      items: ["Biography", "Skills", "Experience", "Education"]
    },
    {
      title: "Services",
      items: ["Web Development", "Mobile Development", "Desktop Applications", "UI/UX Design"]
    },
    {
      title: "Projects",
      items: ["S24012", "S24011", "S24010", "View All Projects"]
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "chiranjonline@gmail.com",
      href: "mailto:chiranjonline@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+94 77 9980 990",
      href: "tel:+94779980990"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Sri Lanka",
      href: "#"
    }
  ];

  return (
    <footer className="bg-background-secondary text-text-primary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-background-secondary" />
      
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Top Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent mb-12" />
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center mb-6">
              <motion.img
                className="h-12 w-auto mr-3"
                src={myLogo}
                alt="Chiran Jeewantha"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                ChiranJ
              </h2>
            </Link>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Passionate Full Stack Developer creating innovative digital solutions with modern technologies.
            </p>
            <SocialMedia className="w-6 h-6 hover:scale-110 transition-all duration-300" />
          </motion.div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-primary-400 mb-4">
                {section.title}
              </h3>
              <div className="w-12 h-px bg-gradient-to-r from-primary-400 to-transparent mb-4" />
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-text-secondary hover:text-primary-400 transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 mb-12"
        >
          <h3 className="text-xl font-semibold text-primary-400 mb-6 text-center">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="flex items-center justify-center md:justify-start space-x-3 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 flex items-center justify-center group-hover:from-primary-400 group-hover:to-cyan-400 transition-all duration-300">
                  <contact.icon className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">{contact.label}</p>
                  <p className="text-sm text-text-secondary group-hover:text-primary-400 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-sm text-text-muted">
                © {currentYear} Chiran Jeewantha. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-xs text-text-muted hover:text-primary-400 transition-colors duration-300">
                  Terms of Use
                </a>
                <span className="text-xs text-text-muted">•</span>
                <a href="#" className="text-xs text-text-muted hover:text-primary-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm text-text-secondary">
                Built with ❤️
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
