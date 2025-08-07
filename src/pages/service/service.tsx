import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaServer,
  FaDesktop,
  FaRocket,
  FaUsers,
  FaClock,
  FaCheck,
  FaArrowRight,
  FaLaptopCode,
  FaCogs,
  FaChartLine,
  FaShieldAlt
} from "react-icons/fa";

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: any;
  gradient: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  processSteps: { title: string; description: string }[];
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export const Service = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const services: Service[] = [
    {
      id: "web-development",
      title: "Web Development",
      shortDescription: "Modern, responsive web applications built with cutting-edge technologies",
      detailedDescription: "I create high-performance, scalable web applications using modern frameworks like React, Vue.js, and Next.js. From simple landing pages to complex enterprise applications, I deliver solutions that are fast, secure, and user-friendly.",
      icon: FaCode,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Modern UI/UX",
        "Progressive Web Apps"
      ],
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      deliverables: [
        "Fully functional web application",
        "Source code with documentation",
        "Deployment guide",
        "3 months support",
        "Performance optimization report"
      ],
      timeline: "2-8 weeks",
      startingPrice: "$1,500",
      processSteps: [
        { title: "Discovery", description: "Understanding your requirements and goals" },
        { title: "Design", description: "Creating wireframes and UI/UX design" },
        { title: "Development", description: "Building the application with best practices" },
        { title: "Testing", description: "Comprehensive testing and quality assurance" },
        { title: "Deployment", description: "Launching your application to production" }
      ]
    },
    {
      id: "api-development",
      title: "API Development",
      shortDescription: "Robust RESTful APIs and microservices for your applications",
      detailedDescription: "I design and develop scalable backend services and APIs using NestJS, Express.js, and Laravel. My APIs are secure, well-documented, and built to handle high traffic while maintaining excellent performance.",
      icon: FaServer,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "RESTful API Design",
        "Authentication & Authorization",
        "Database Integration",
        "API Documentation",
        "Rate Limiting",
        "Microservices Architecture"
      ],
      technologies: ["NestJS", "Express.js", "Laravel", "MongoDB", "MySQL", "Redis"],
      deliverables: [
        "Complete API with endpoints",
        "Comprehensive documentation",
        "Database schema",
        "Authentication system",
        "Testing suite"
      ],
      timeline: "3-6 weeks",
      startingPrice: "$2,000",
      processSteps: [
        { title: "Planning", description: "API architecture and endpoint design" },
        { title: "Development", description: "Building secure and scalable endpoints" },
        { title: "Integration", description: "Database and third-party service integration" },
        { title: "Documentation", description: "Creating comprehensive API documentation" },
        { title: "Testing", description: "Unit testing and integration testing" }
      ]
    },
    {
      id: "desktop-apps",
      title: "Desktop Applications",
      shortDescription: "Cross-platform desktop applications using modern web technologies",
      detailedDescription: "Using Electron.js and React, I create powerful desktop applications that work seamlessly across Windows, macOS, and Linux. Perfect for businesses needing feature-rich desktop software with modern interfaces.",
      icon: FaDesktop,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Cross-platform Compatibility",
        "Native System Integration",
        "Offline Functionality",
        "Auto-updates",
        "File System Access",
        "System Notifications"
      ],
      technologies: ["Electron", "React", "TypeScript", "Node.js", "SQLite", "Auto-updater"],
      deliverables: [
        "Packaged desktop application",
        "Installation packages for all platforms",
        "Source code",
        "User manual",
        "Update mechanism"
      ],
      timeline: "4-10 weeks",
      startingPrice: "$2,500",
      processSteps: [
        { title: "Requirements", description: "Understanding desktop app requirements" },
        { title: "Architecture", description: "Designing the application structure" },
        { title: "Development", description: "Building the desktop application" },
        { title: "Packaging", description: "Creating installation packages" },
        { title: "Distribution", description: "Setting up distribution channels" }
      ]
    },
    {
      id: "consulting",
      title: "Technical Consulting",
      shortDescription: "Expert guidance on technology decisions and architecture planning",
      detailedDescription: "I provide strategic technical consulting to help businesses make informed technology decisions. From choosing the right tech stack to architecting scalable solutions, I guide you through complex technical challenges.",
      icon: FaLaptopCode,
      gradient: "from-orange-500 to-red-500",
      features: [
        "Technology Assessment",
        "Architecture Planning",
        "Code Review",
        "Performance Optimization",
        "Best Practices",
        "Team Training"
      ],
      technologies: ["Various based on project needs"],
      deliverables: [
        "Technical assessment report",
        "Architecture documentation",
        "Implementation roadmap",
        "Best practices guide",
        "Training materials"
      ],
      timeline: "1-4 weeks",
      startingPrice: "$150/hour",
      processSteps: [
        { title: "Assessment", description: "Analyzing current technical landscape" },
        { title: "Analysis", description: "Identifying opportunities and challenges" },
        { title: "Strategy", description: "Developing technical strategy and roadmap" },
        { title: "Documentation", description: "Creating detailed recommendations" },
        { title: "Presentation", description: "Presenting findings and next steps" }
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      shortDescription: "Ongoing maintenance and support for your existing applications",
      detailedDescription: "Keep your applications running smoothly with my comprehensive maintenance and support services. I provide bug fixes, feature updates, performance optimization, and technical support to ensure your software stays current and secure.",
      icon: FaCogs,
      gradient: "from-teal-500 to-blue-500",
      features: [
        "Bug Fixes",
        "Feature Updates",
        "Security Patches",
        "Performance Monitoring",
        "24/7 Support",
        "Regular Backups"
      ],
      technologies: ["React", "Node.js", "Databases", "Cloud Services", "Monitoring Tools"],
      deliverables: [
        "Monthly maintenance reports",
        "Performance analytics",
        "Security updates",
        "Feature enhancements",
        "Support documentation"
      ],
      timeline: "Ongoing",
      startingPrice: "$500/month",
      processSteps: [
        { title: "Assessment", description: "Evaluating current application state" },
        { title: "Planning", description: "Creating maintenance schedule" },
        { title: "Monitoring", description: "Continuous performance monitoring" },
        { title: "Updates", description: "Regular updates and improvements" },
        { title: "Reporting", description: "Monthly progress and health reports" }
      ]
    },
    {
      id: "optimization",
      title: "Performance Optimization",
      shortDescription: "Speed up your applications and improve user experience",
      detailedDescription: "I analyze and optimize your existing applications to improve performance, reduce load times, and enhance user experience. From frontend optimizations to backend improvements, I ensure your applications run at peak performance.",
      icon: FaRocket,
      gradient: "from-yellow-500 to-orange-500",
      features: [
        "Speed Optimization",
        "Bundle Size Reduction",
        "Database Optimization",
        "Caching Strategies",
        "CDN Integration",
        "Performance Monitoring"
      ],
      technologies: ["Webpack", "Lighthouse", "Performance APIs", "CDN", "Caching", "Database Tuning"],
      deliverables: [
        "Performance audit report",
        "Optimized application",
        "Performance monitoring setup",
        "Optimization documentation",
        "Best practices guide"
      ],
      timeline: "2-4 weeks",
      startingPrice: "$1,200",
      processSteps: [
        { title: "Audit", description: "Comprehensive performance analysis" },
        { title: "Identification", description: "Finding performance bottlenecks" },
        { title: "Optimization", description: "Implementing performance improvements" },
        { title: "Testing", description: "Validating performance gains" },
        { title: "Monitoring", description: "Setting up ongoing performance tracking" }
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStart Inc.",
      content: "Outstanding work! The web application exceeded our expectations in both functionality and design. The development process was smooth and professional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Digital Solutions",
      content: "The API development was flawless. Well-documented, secure, and performant. Highly recommend for any backend development needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupHub",
      content: "Excellent technical consulting services. Helped us choose the right technology stack and provided valuable insights for our scaling strategy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const whyChooseMe = [
    {
      icon: FaUsers,
      title: "Client-Focused Approach",
      description: "I prioritize understanding your business needs and delivering solutions that drive results."
    },
    {
      icon: FaClock,
      title: "Timely Delivery",
      description: "I respect deadlines and deliver projects on time without compromising on quality."
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing to ensure reliability and performance."
    },
    {
      icon: FaChartLine,
      title: "Scalable Solutions",
      description: "I build applications that grow with your business and adapt to changing needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Services
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            I offer comprehensive development services to bring your ideas to life. 
            From web applications to desktop software, I deliver solutions that exceed expectations.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => setSelectedService(service)}
              className="glass rounded-2xl p-6 cursor-pointer group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <service.icon className="text-2xl text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors text-center">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-4 leading-relaxed text-center">
                {service.shortDescription}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-primary-400 font-semibold">
                  Starting at {service.startingPrice}
                </span>
                <FaArrowRight className="text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose My Services?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I combine technical expertise with business understanding to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-xl text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-text-secondary">
              Here's what my clients say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-text-secondary mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sendMail"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg font-semibold hover:from-primary-400 hover:to-purple-400 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <FaRocket />
              Get Started
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 glass-light rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <FaCode />
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedService.gradient} flex items-center justify-center`}>
                        <selectedService.icon className="text-2xl text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                        <p className="text-primary-400 font-semibold">
                          Starting at {selectedService.startingPrice}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex gap-4 mb-6 overflow-x-auto">
                    {["overview", "process", "deliverables"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                          activeTab === tab
                            ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white"
                            : "bg-white/5 hover:bg-white/10"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeTab === "overview" && (
                        <div className="space-y-6">
                          <p className="text-text-secondary leading-relaxed">
                            {selectedService.detailedDescription}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                              <ul className="space-y-2">
                                {selectedService.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-3">
                                    <FaCheck className="text-green-400 text-sm" />
                                    <span className="text-text-secondary">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                              <div className="flex flex-wrap gap-2">
                                {selectedService.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="px-3 py-1 bg-white/10 rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="mt-6">
                                <h4 className="font-semibold mb-2">Timeline</h4>
                                <p className="text-text-secondary">{selectedService.timeline}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "process" && (
                        <div>
                          <h3 className="text-xl font-semibold mb-6">Development Process</h3>
                          <div className="space-y-4">
                            {selectedService.processSteps.map((step, index) => (
                              <div key={index} className="flex gap-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                                  {index + 1}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold mb-1">{step.title}</h4>
                                  <p className="text-text-secondary">{step.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === "deliverables" && (
                        <div>
                          <h3 className="text-xl font-semibold mb-6">What You'll Receive</h3>
                          <ul className="space-y-3">
                            {selectedService.deliverables.map((deliverable, index) => (
                              <li key={index} className="flex items-center gap-3">
                                <FaCheck className="text-green-400" />
                                <span className="text-text-secondary">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                    <Link
                      to="/sendMail"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg font-semibold hover:from-primary-400 hover:to-purple-400 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                    <Link
                      to="/projects"
                      className="px-6 py-3 glass-light rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                    >
                      View Examples
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};