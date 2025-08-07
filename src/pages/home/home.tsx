import { Link } from "react-router-dom";
import DownloadCVButton from "../../components/Buttons/DownloadCVButton";
import { motion } from "framer-motion";
import myPic from "../../../public/myPic.png";
import { ParticlesBackground } from "../../particlesBackground";
import { FaCode, FaMobile, FaServer } from "react-icons/fa";

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Creating responsive, scalable, and high-performance web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaMobile,
      title: "Desktop Applications",
      description: "Building cross-platform desktop applications using Electron.js to deliver seamless user experiences across different operating systems.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FaServer,
      title: "RESTful APIs",
      description: "Designing and developing robust RESTful APIs using NestJS and Laravel, focusing on scalability, performance, and security.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="bg-background-primary min-h-screen text-text-primary font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <ParticlesBackground />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <motion.div 
          className="relative z-10 container mx-auto px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={myPic}
                  alt="Chiran Jeewantha"
                  className="mx-auto mt-4 rounded-full h-72 w-72 object-cover border-4 border-gradient-to-r from-primary-400 to-cyan-400 shadow-2xl shadow-primary-500/25"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-cyan-500/20 animate-pulse" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-3 shadow-lg"
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Welcome to My
              </span>
              <br />
              <span className="text-text-primary">Portfolio</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I am <span className="font-bold bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">Chiran Jeewantha</span>, 
              a passionate <span className="font-semibold text-white">Full Stack Software Engineer</span> crafting innovative digital solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link
              to="/about"
              className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
            >
              <span className="relative z-10">Learn More About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <DownloadCVButton />
          </motion.div>

          {/* Animated Arrow */}
          <motion.div
            variants={itemVariants}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-text-secondary"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-primary to-background-secondary" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-3xl p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                I specialize in <span className="text-primary-400 font-semibold">software development</span> with 
                a focus on creating seamless, scalable, and intuitive user experiences. With expertise in 
                <span className="text-cyan-400 font-semibold"> Laravel, React, NestJS, TypeScript</span>, and modern databases, 
                I'm passionate about building innovative solutions that make a difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/service"
                  className="btn-primary"
                >
                  My Services
                </Link>
                <Link
                  to="/projects"
                  className="btn-secondary"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                My Services
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Delivering cutting-edge solutions with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-glow group cursor-pointer h-full flex flex-col"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300 min-h-[3.5rem] flex items-center">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
