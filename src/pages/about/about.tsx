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
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="glass rounded-3xl p-8 md:p-12 text-center max-w-5xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                Introduction
              </span>
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full mb-8"
            />

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary leading-relaxed italic mb-6"
            >
              Hello there! I'm <span className="text-primary-400 font-semibold">Chiran Jeewantha Vidanagamage</span>, 
              a dedicated <span className="text-white font-semibold">Full Stack Developer</span> based in Sri Lanka. At{" "}
              <span className="text-cyan-400 font-semibold">{age}</span>, my journey in the world of technology has been driven by a 
              profound passion for creating innovative solutions through code. As a
              <span className="text-primary-400 font-semibold"> Software Engineer</span>, I specialize in full-stack development, 
              with expertise in <span className="text-white font-semibold">Nest.js, React.js, Laravel, Vue.js, and TypeScript</span>. 
              My work revolves around turning ideas into reality by leveraging cutting-edge technologies and best coding practices.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-text-secondary leading-relaxed mb-8"
            >
              I have a deep interest in solving complex problems with technology and 
              believe in continuous learning to keep up with the evolving tech industry.
            </motion.p>

            <motion.div variants={itemVariants}>
              <DownloadCVButton />
            </motion.div>
          </motion.div>
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
