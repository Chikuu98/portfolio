import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import myPic from "../../../public/myPic.png";
import { ParticlesBackground } from "../../particlesBackground";
import { FaCode, FaMobile, FaServer, FaDownload, FaFileAlt } from "react-icons/fa";

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

          {/* Dynamic Availability Indicator Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6 shadow-2xl animate-float"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-slate-300">
              Available for New Projects & Roles
            </span>
          </motion.div>

          {/* Hello World tag & Name Heading */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="text-primary-400 text-sm md:text-base font-mono tracking-widest block mb-3 uppercase">
              &lt;hello world /&gt;
            </span>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none mb-6">
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block pb-2">
                Chiran Jeewantha
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="mb-10"
          >
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A passionate <span className="text-cyan-400 font-semibold">Full Stack Software Engineer</span> dedicated to crafting next-generation digital products and robust architectures.
            </p>
          </motion.div>

          {/* Custom Modern Buttons Pair */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            {/* Primary Button: Explore Profile */}
            <Link
              to="/about"
              className="group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-bold rounded-xl bg-gradient-to-br from-primary-400 via-purple-500 to-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full sm:w-auto"
            >
              <span className="relative px-8 py-3.5 transition-all ease-in duration-300 bg-background-primary/95 group-hover:bg-transparent rounded-[10px] w-full text-center flex items-center justify-center gap-2">
                <span>Explore Profile</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </span>
            </Link>

            {/* Secondary Button: Download CV */}
            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              download="CHIRAN_JEEWANTHA_CV.pdf"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-bold rounded-xl glass-light border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/5 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] gap-3 w-full sm:w-auto"
            >
              <FaFileAlt className="text-xl text-cyan-400 group-hover:animate-bounce" />
              <span>Download CV</span>
              <FaDownload className="text-sm text-cyan-400/80 group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Modern Mini IDE/Terminal Mock-up */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              
              <div className="relative glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs md:text-sm">
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-text-secondary text-[10px] font-medium tracking-wider">skills.json</span>
                  <div className="w-10" />
                </div>
                <div className="p-5 space-y-2.5 bg-[#0a0f1d]/90 text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">skills</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"frontend"</span>:{" "}
                    <span className="text-yellow-400">{"["}</span>
                    <span className="text-cyan-400">"React"</span>,{" "}
                    <span className="text-cyan-400">"TypeScript"</span>
                    <span className="text-yellow-400">{"]"}</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"backend"</span>:{" "}
                    <span className="text-yellow-400">{"["}</span>
                    <span className="text-orange-400">"NestJS"</span>,{" "}
                    <span className="text-orange-400">"Laravel"</span>
                    <span className="text-yellow-400">{"]"}</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"focus"</span>:{" "}
                    <span className="text-green-400">"Performance & Clean Code"</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">{"}"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: About text and buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Crafting Exceptional Digital Experiences With{" "}
                <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                  Modern Technologies
                </span>
              </h3>
              
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                I specialize in <span className="text-white font-semibold">software development</span> with a strong focus on building seamless, scalable, and highly performant full-stack solutions.
              </p>
              
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                With deep expertise across <span className="text-primary-400 font-semibold">NestJS, React, Laravel, and TypeScript</span>, my passion lies in translating complex requirements into clean, elegant, and secure code.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/20 text-primary-300">
                  ⚡ Scalable Architecture
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  🚀 Highly Performant APIs
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  🎨 Interactive & Responsive UIs
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/about" className="btn-primary text-center">
                  Learn More About Me
                </Link>
                <Link to="/service" className="btn-secondary text-center">
                  My Services
                </Link>
              </div>
            </motion.div>
          </div>
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
