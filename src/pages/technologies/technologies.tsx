import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaServer,
  FaCloud,
  FaMobile
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiTypescript,
  SiRedis,
  SiElectron,
  SiNextdotjs,
  SiVite,
  SiExpress,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiIntellijidea,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiKubernetes,
  SiJenkins,
  SiGraphql
} from "react-icons/si";

interface Technology {
  icon: any;
  name: string;
  color: string;
  proficiency: number;
  experience: string;
  description: string;
}

interface TechCategory {
  title: string;
  description: string;
  icon: any;
  gradient: string;
  technologies: Technology[];
}

export const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

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

  const techCategories: TechCategory[] = [
    {
      title: "Frontend Development",
      description: "Modern frontend frameworks and libraries for building interactive user interfaces",
      icon: FaReact,
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        {
          icon: FaReact,
          name: "React",
          color: "text-blue-400",
          proficiency: 95,
          experience: "3+ years",
          description: "Expert in React ecosystem including hooks, context, and modern patterns"
        },
        {
          icon: SiTypescript,
          name: "TypeScript",
          color: "text-blue-500",
          proficiency: 90,
          experience: "2+ years",
          description: "Strong typing and advanced TypeScript features for scalable applications"
        },
        {
          icon: FaVuejs,
          name: "Vue.js",
          color: "text-green-500",
          proficiency: 85,
          experience: "2+ years",
          description: "Vue 3 composition API, Vuex, and modern Vue ecosystem"
        },
        {
          icon: SiNextdotjs,
          name: "Next.js",
          color: "text-white",
          proficiency: 88,
          experience: "2+ years",
          description: "SSR, SSG, and full-stack development with Next.js"
        },
        {
          icon: FaJs,
          name: "JavaScript",
          color: "text-yellow-400",
          proficiency: 95,
          experience: "4+ years",
          description: "ES6+, modern JavaScript features, and browser APIs"
        },
        {
          icon: FaHtml5,
          name: "HTML5",
          color: "text-orange-500",
          proficiency: 95,
          experience: "5+ years",
          description: "Semantic HTML, accessibility, and modern web standards"
        },
        {
          icon: FaCss3Alt,
          name: "CSS3",
          color: "text-blue-400",
          proficiency: 90,
          experience: "5+ years",
          description: "Advanced CSS, animations, flexbox, and grid layouts"
        },
        {
          icon: SiTailwindcss,
          name: "Tailwind CSS",
          color: "text-cyan-400",
          proficiency: 92,
          experience: "2+ years",
          description: "Utility-first CSS framework for rapid UI development"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Server-side technologies and frameworks for building robust APIs and services",
      icon: FaServer,
      gradient: "from-green-500 to-emerald-500",
      technologies: [
        {
          icon: SiNestjs,
          name: "NestJS",
          color: "text-red-500",
          proficiency: 90,
          experience: "2+ years",
          description: "Enterprise-grade Node.js framework with TypeScript and decorators"
        },
        {
          icon: FaNodeJs,
          name: "Node.js",
          color: "text-green-600",
          proficiency: 88,
          experience: "3+ years",
          description: "Server-side JavaScript runtime and ecosystem"
        },
        {
          icon: SiExpress,
          name: "Express.js",
          color: "text-gray-400",
          proficiency: 85,
          experience: "3+ years",
          description: "Fast and minimalist web framework for Node.js"
        },
        {
          icon: FaLaravel,
          name: "Laravel",
          color: "text-red-600",
          proficiency: 82,
          experience: "2+ years",
          description: "Elegant PHP framework with rich feature set"
        },
        {
          icon: SiSpringboot,
          name: "Spring Boot",
          color: "text-green-500",
          proficiency: 78,
          experience: "1+ years",
          description: "Java-based framework for building microservices"
        },
        {
          icon: FaJava,
          name: "Java",
          color: "text-red-500",
          proficiency: 75,
          experience: "2+ years",
          description: "Object-oriented programming and enterprise development"
        },
        {
          icon: FaPython,
          name: "Python",
          color: "text-yellow-400",
          proficiency: 70,
          experience: "1+ years",
          description: "Scripting, automation, and backend development"
        },
        {
          icon: SiGraphql,
          name: "GraphQL",
          color: "text-pink-500",
          proficiency: 75,
          experience: "1+ years",
          description: "Query language and runtime for APIs"
        }
      ]
    },
    {
      title: "Database & Storage",
      description: "Database systems and data storage solutions for various application needs",
      icon: FaDatabase,
      gradient: "from-purple-500 to-pink-500",
      technologies: [
        {
          icon: SiMongodb,
          name: "MongoDB",
          color: "text-green-500",
          proficiency: 88,
          experience: "2+ years",
          description: "NoSQL document database with flexible schema design"
        },
        {
          icon: SiMysql,
          name: "MySQL",
          color: "text-blue-600",
          proficiency: 85,
          experience: "3+ years",
          description: "Relational database with complex queries and optimization"
        },
        {
          icon: SiPostgresql,
          name: "PostgreSQL",
          color: "text-blue-400",
          proficiency: 80,
          experience: "2+ years",
          description: "Advanced relational database with rich feature set"
        },
        {
          icon: SiRedis,
          name: "Redis",
          color: "text-red-400",
          proficiency: 75,
          experience: "1+ years",
          description: "In-memory data structure store for caching and sessions"
        },
        {
          icon: SiFirebase,
          name: "Firebase",
          color: "text-yellow-500",
          proficiency: 78,
          experience: "1+ years",
          description: "Real-time database and backend-as-a-service platform"
        }
      ]
    },
    {
      title: "DevOps & Tools",
      description: "Development tools, deployment platforms, and workflow optimization",
      icon: FaCloud,
      gradient: "from-cyan-500 to-blue-500",
      technologies: [
        {
          icon: FaDocker,
          name: "Docker",
          color: "text-blue-400",
          proficiency: 82,
          experience: "2+ years",
          description: "Containerization and application deployment"
        },
        {
          icon: SiKubernetes,
          name: "Kubernetes",
          color: "text-blue-500",
          proficiency: 70,
          experience: "1+ years",
          description: "Container orchestration and cluster management"
        },
        {
          icon: FaGitAlt,
          name: "Git",
          color: "text-orange-500",
          proficiency: 92,
          experience: "4+ years",
          description: "Version control and collaborative development workflows"
        },
        {
          icon: FaGithub,
          name: "GitHub",
          color: "text-white",
          proficiency: 90,
          experience: "4+ years",
          description: "Code hosting, CI/CD, and project management"
        },
        {
          icon: FaCloud,
          name: "AWS",
          color: "text-orange-400",
          proficiency: 75,
          experience: "1+ years",
          description: "Cloud services including EC2, S3, Lambda, and RDS"
        },
        {
          icon: SiVercel,
          name: "Vercel",
          color: "text-white",
          proficiency: 85,
          experience: "2+ years",
          description: "Frontend deployment and serverless functions"
        },
        {
          icon: SiNetlify,
          name: "Netlify",
          color: "text-cyan-400",
          proficiency: 82,
          experience: "2+ years",
          description: "Static site hosting and continuous deployment"
        },
        {
          icon: SiJenkins,
          name: "Jenkins",
          color: "text-blue-500",
          proficiency: 68,
          experience: "1+ years",
          description: "Continuous integration and deployment automation"
        }
      ]
    },
    {
      title: "Desktop & Mobile",
      description: "Cross-platform development for desktop and mobile applications",
      icon: FaMobile,
      gradient: "from-pink-500 to-purple-500",
      technologies: [
        {
          icon: SiElectron,
          name: "Electron",
          color: "text-cyan-400",
          proficiency: 85,
          experience: "2+ years",
          description: "Cross-platform desktop applications with web technologies"
        },
        {
          icon: FaReact,
          name: "React Native",
          color: "text-blue-400",
          proficiency: 70,
          experience: "1+ years",
          description: "Native mobile app development with React"
        }
      ]
    },
    {
      title: "Development Tools",
      description: "IDEs, build tools, and development environment optimization",
      icon: FaServer,
      gradient: "from-indigo-500 to-purple-500",
      technologies: [
        {
          icon: FaServer,
          name: "VS Code",
          color: "text-blue-500",
          proficiency: 95,
          experience: "4+ years",
          description: "Primary code editor with extensive customization"
        },
        {
          icon: SiIntellijidea,
          name: "IntelliJ IDEA",
          color: "text-red-500",
          proficiency: 80,
          experience: "2+ years",
          description: "Java and Kotlin development environment"
        },
        {
          icon: SiVite,
          name: "Vite",
          color: "text-purple-500",
          proficiency: 88,
          experience: "2+ years",
          description: "Fast build tool and development server"
        },
        {
          icon: SiWebpack,
          name: "Webpack",
          color: "text-blue-400",
          proficiency: 75,
          experience: "2+ years",
          description: "Module bundler and build optimization"
        },
        {
          icon: SiNpm,
          name: "NPM",
          color: "text-red-500",
          proficiency: 90,
          experience: "4+ years",
          description: "Package management and script automation"
        },
        {
          icon: SiYarn,
          name: "Yarn",
          color: "text-blue-500",
          proficiency: 85,
          experience: "3+ years",
          description: "Fast and reliable package manager"
        },
        {
          icon: SiEslint,
          name: "ESLint",
          color: "text-purple-500",
          proficiency: 85,
          experience: "3+ years",
          description: "Code linting and quality enforcement"
        },
        {
          icon: SiPrettier,
          name: "Prettier",
          color: "text-gray-400",
          proficiency: 90,
          experience: "3+ years",
          description: "Code formatting and style consistency"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "from-green-500 to-emerald-500";
    if (proficiency >= 80) return "from-blue-500 to-cyan-500";
    if (proficiency >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Beginner";
  };

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
              Technologies & Skills
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Explore my technical expertise across various domains. From frontend frameworks to 
            backend services, databases to deployment tools - here's my technology stack.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techCategories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : "glass-light text-text-secondary hover:text-text-primary hover:bg-white/10"
              }`}
            >
              {(() => {
                const IconComponent = category.icon;
                return <IconComponent className="text-xl" />;
              })()}
              <span className="hidden sm:inline">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Category Content */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${techCategories[selectedCategory].gradient} mb-6`}>
              {(() => {
                const IconComponent = techCategories[selectedCategory].icon;
                return <IconComponent className="text-3xl text-white" />;
              })()}
            </div>
            <h2 className="text-3xl font-bold mb-4">{techCategories[selectedCategory].title}</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {techCategories[selectedCategory].description}
            </p>
          </div>

          {/* Technologies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {techCategories[selectedCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    {(() => {
                      const IconComponent = tech.icon;
                      return <IconComponent className={`text-4xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />;
                    })()}
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-xs font-bold text-white">✓</span>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold group-hover:text-primary-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{tech.experience}</p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className={`text-sm font-bold bg-gradient-to-r ${getProficiencyColor(tech.proficiency)} bg-clip-text text-transparent`}>
                      {getProficiencyLabel(tech.proficiency)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(tech.proficiency)}`}
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-text-secondary">{tech.proficiency}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Technical Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">
                {techCategories.reduce((acc, cat) => acc + cat.technologies.length, 0)}
              </div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {techCategories.reduce((acc, cat) => acc + cat.technologies.filter(t => t.proficiency >= 90).length, 0)}
              </div>
              <div className="text-sm text-text-secondary">Expert Level</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {techCategories.reduce((acc, cat) => acc + cat.technologies.filter(t => t.proficiency >= 80).length, 0)}
              </div>
              <div className="text-sm text-text-secondary">Advanced+</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-sm text-text-secondary">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};