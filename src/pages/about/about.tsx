import { useAge } from "../../contexts/AgeProvider";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiJira,
  SiPostman,
  SiTypescript,
  SiRedis,
} from "react-icons/si";
import DownloadCVButton from "../../components/Buttons/DownloadCVButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const About = () => {
  const { age } = useAge();

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

  const skills = {
    frontend: [
      { icon: FaReact, name: "React", color: "text-blue-400" },
      { icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
    ],
    backend: [
      { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
      { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
      { icon: FaLaravel, name: "Laravel", color: "text-red-600" },
      { icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" },
    ],
    database: [
      { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
      { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: SiRedis, name: "Redis", color: "text-red-400" },
      { icon: FaDocker, name: "Docker", color: "text-blue-400" },
    ],
    tools: [
      { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
      { icon: FaGithub, name: "GitHub", color: "text-white" },
      { icon: SiPostman, name: "Postman", color: "text-orange-500" },
      { icon: SiJira, name: "Jira", color: "text-blue-600" },
    ],
  };

  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Modern Interactive Developer Console */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative"
            >
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              
              <div className="relative glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs md:text-sm">
                {/* Window header */}
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-text-secondary text-[11px] font-medium tracking-wider">developer.json</span>
                  <div className="w-12" />
                </div>
                
                {/* Window content */}
                <div className="p-6 space-y-3 bg-[#0a0f1d]/90 text-slate-300 leading-relaxed">
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"name"</span>:{" "}
                    <span className="text-green-400">"Chiran Jeewantha"</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"role"</span>:{" "}
                    <span className="text-green-400">"Full Stack Engineer"</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"age"</span>:{" "}
                    <span className="text-cyan-400">{age}</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"location"</span>:{" "}
                    <span className="text-green-400">"Sri Lanka"</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"passion"</span>:{" "}
                    <span className="text-green-400">"Crafting clean, scalable code"</span>,
                  </div>
                  <div className="pl-5">
                    <span className="text-purple-400">"stack"</span>:{" "}
                    <span className="text-yellow-400">{"["}</span>
                    <span className="text-orange-400">"NestJS"</span>,{" "}
                    <span className="text-blue-400">"React"</span>,{" "}
                    <span className="text-red-400">"Laravel"</span>
                    <span className="text-yellow-400">{"]"}</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">{"}"}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Dynamic Intro text & tags */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 flex flex-col justify-center space-y-6"
            >
              <div className="space-y-2">
                <span className="text-primary-400 font-bold text-sm tracking-widest uppercase">
                  Discover My Story
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  I Turn Complex Problems Into{" "}
                  <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Elegant Solutions
                  </span>
                </h2>
              </div>
              
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Hello there! I'm <span className="text-white font-semibold">Chiran Jeewantha Vidanagamage</span>, a dedicated 
                <span className="text-primary-400 font-semibold"> Full Stack Developer</span> based in Sri Lanka. At{" "}
                <span className="text-cyan-400 font-semibold">{age}</span>, my journey in technology has been defined by a deep passion 
                for engineering high-performance digital solutions and robust system architectures.
              </p>

              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Specializing in end-to-end full-stack development, I leverage modern paradigms like <span className="text-white font-semibold">Nest.js, React.js, Laravel, Vue.js, and TypeScript</span> to craft experiences that are exceptionally performant, highly secure, and beautifully interactive.
              </p>

              {/* Dynamic tag badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-500/10 border border-primary-500/20 text-primary-300">
                  ⚡ Full Stack Development
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  🚀 Scalable Backend APIs
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  🎨 Pixel-Perfect Frontends
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-green-500/10 border border-green-500/20 text-green-300">
                  🛠️ Clean Code Architect
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <DownloadCVButton />
                <Link to="/projects" className="btn-secondary text-center w-full sm:w-auto">
                  View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card h-fit"
            >
              <h3 className="text-xl font-semibold text-primary-400 mb-6 text-center">Frontend</h3>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <skill.icon className={`text-2xl ${skill.color} flex-shrink-0`} />
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card h-fit"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6 text-center">Backend</h3>
              <div className="space-y-4">
                {skills.backend.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <skill.icon className={`text-2xl ${skill.color} flex-shrink-0`} />
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Database & DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card h-fit"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center">Database & DevOps</h3>
              <div className="space-y-4">
                {skills.database.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <skill.icon className={`text-2xl ${skill.color} flex-shrink-0`} />
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card h-fit"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-6 text-center">Development Tools</h3>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <skill.icon className={`text-2xl ${skill.color} flex-shrink-0`} />
                    <span className="text-text-secondary font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sendMail"
                className="btn-primary"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="btn-secondary"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
