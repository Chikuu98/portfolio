import React, { FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import { SuccessAlert } from "../../components/SuccessAlert";
import { FailureAlert } from "../../components/FailureAlert";
import { useAlert } from "../../utility/useAlert";
import { PreLoader } from "../../components/PreLoader";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaTag } from "react-icons/fa";

export const SendMail: React.FC = () => {
  const SERVICE_ID = "service_6d6h9ds";
  const TEMPLATE_ID = "template_7v4wq3w";
  const TEMPLATE_ID2 = "template_pbgi4uz";
  const PUBLIC_KEY = "7-9QoUCwLRLSiaZCf";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { alert, showAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY).then(
      (response1) => {
        if (response1.status === 200) {
          emailjs.send(SERVICE_ID, TEMPLATE_ID2, formData, PUBLIC_KEY).then(
            (response2) => {
              if (response2.status === 200) {
                setLoading(false);
                showAlert("success", "Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
              } else {
                setLoading(false);
                showAlert(
                  "error",
                  "Failed to send the message. Please try again."
                );
              }
            },
            (error2) => {
              setLoading(false);
              console.log(error2);
              showAlert(
                "error",
                "Failed to send the message. Please try again."
              );
            }
          );
        } else {
          setLoading(false);
          showAlert("error", "Failed to send the message. Please try again.");
        }
      },
      (error1) => {
        setLoading(false);
        console.log(error1);
        showAlert("error", "Failed to send first message. Please try again.");
      }
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary py-4 md:py-8 px-4 md:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 px-4">
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full mb-3 md:mb-6" />
          <p className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed px-4">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-start"
        >
          {/* Contact Info Section */}
          <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 order-2 xl:order-1">
            <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 h-fit">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                  Let's Start a Conversation
                </span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just to chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-3 md:space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-primary-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaEnvelope className="text-white text-sm md:text-base" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-text-muted text-xs uppercase tracking-wider">Email</p>
                    <p className="text-text-primary font-medium text-sm md:text-base break-all">chiranjonline@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-3 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaPaperPlane className="text-white text-sm md:text-base" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-text-muted text-xs uppercase tracking-wider">Response Time</p>
                    <p className="text-text-primary font-medium text-sm md:text-base">Usually within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaUser className="text-white text-sm md:text-base" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-text-muted text-xs uppercase tracking-wider">Availability</p>
                    <p className="text-text-primary font-medium text-sm md:text-base">Open for new projects</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={itemVariants} className="h-fit order-1 xl:order-2">
            <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Send a Message
                  </span>
                </h2>
                <p className="text-text-secondary text-sm md:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {loading && (
                <div className="mb-3 md:mb-4">
                  <PreLoader />
                </div>
              )}
              
              {alert && (
                <motion.div 
                  className="mb-3 md:mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {alert.type === "success" && <SuccessAlert message={alert.message} />}
                  {alert.type === "error" && <FailureAlert message={alert.message} />}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-xs font-medium text-text-secondary mb-1 ml-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-text-muted text-sm" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full pl-9 pr-3 py-2.5 md:py-3 bg-background-secondary/50 backdrop-blur-sm border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative">
                    <label className="block text-xs font-medium text-text-secondary mb-1 ml-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-text-muted text-sm" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full pl-9 pr-3 py-2.5 md:py-3 bg-background-secondary/50 backdrop-blur-sm border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-sm"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-xs font-medium text-text-secondary mb-1 ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaTag className="text-text-muted text-sm" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full pl-9 pr-3 py-2.5 md:py-3 bg-background-secondary/50 backdrop-blur-sm border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-sm"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <label className="block text-xs font-medium text-text-secondary mb-1 ml-1">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FaComment className="text-text-muted text-sm" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={4}
                      className="w-full pl-9 pr-3 py-2.5 md:py-3 bg-background-secondary/50 backdrop-blur-sm border border-white/10 rounded-xl text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 resize-none text-sm"
                      required
                    />
                  </div>
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  disabled={loading}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-glow disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  {!loading && (
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaPaperPlane className="text-sm" />
                    </motion.div>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Other Ways to Connect
              </span>
            </h3>
            <p className="text-text-secondary mb-3 md:mb-4 text-sm leading-relaxed">
              Prefer a different platform? You can also find me on various social media platforms or 
              schedule a call to discuss your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/chiranj98/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs md:text-sm py-2 px-4"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/Chikuu98"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-xs md:text-sm py-2 px-4"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
