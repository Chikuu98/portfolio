import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNestjs, SiMongodb, SiMysql, SiElectron, SiNextdotjs, SiSpringboot } from "react-icons/si";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: { icon: any; name: string; color: string }[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  status: "completed" | "in-progress" | "planned";
}

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics.",
      longDescription: "A full-featured e-commerce admin dashboard built with React and TypeScript. Features include inventory management, order tracking, customer analytics, and real-time sales monitoring. The backend is powered by NestJS with MongoDB for data persistence.",
      category: "web",
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
        { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.com",
      features: [
        "Real-time sales analytics",
        "Inventory management",
        "Order tracking system",
        "Customer management",
        "Revenue reporting"
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative project management tool with team features and real-time updates.",
      longDescription: "A modern task management application that enables teams to collaborate effectively. Built with Vue.js and Laravel, it features real-time notifications, file sharing, time tracking, and comprehensive project analytics.",
      category: "web",
      technologies: [
        { icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
        { icon: FaLaravel, name: "Laravel", color: "text-red-600" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" }
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://task-manager-demo.com",
      features: [
        "Team collaboration",
        "Real-time notifications",
        "File sharing",
        "Time tracking",
        "Project analytics"
      ],
      status: "completed"
    },
    {
      id: 3,
      title: "Weather Desktop App",
      description: "A cross-platform desktop weather application with detailed forecasts and beautiful UI.",
      longDescription: "A sleek desktop weather application built with Electron.js and React. Provides detailed weather forecasts, interactive maps, and customizable widgets. Features offline mode and multi-location support.",
      category: "desktop",
      technologies: [
        { icon: SiElectron, name: "Electron", color: "text-cyan-400" },
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" }
      ],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/weather-app",
      features: [
        "Cross-platform compatibility",
        "Real-time weather data",
        "Interactive weather maps",
        "Customizable widgets",
        "Offline mode support"
      ],
      status: "completed"
    },
    {
      id: 4,
      title: "Blog API Service",
      description: "A robust RESTful API for blog management with authentication and content moderation.",
      longDescription: "A comprehensive blog API built with NestJS and TypeScript. Features include user authentication, content management, comment system, and automated content moderation. Designed for scalability and security.",
      category: "api",
      technologies: [
        { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
        { icon: FaNodeJs, name: "Node.js", color: "text-green-600" }
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/blog-api",
      features: [
        "JWT Authentication",
        "Content management",
        "Comment system",
        "Automated moderation",
        "RESTful endpoints"
      ],
      status: "completed"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and dark mode.",
      longDescription: "The very website you're viewing! Built with React, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, particle effects, and a fully responsive design.",
      category: "web",
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
        { icon: SiNextdotjs, name: "Vite", color: "text-purple-500" }
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://your-portfolio.com",
      features: [
        "Responsive design",
        "Smooth animations",
        "Particle effects",
        "Contact form",
        "SEO optimized"
      ],
      status: "completed"
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description: "A scalable microservices system for enterprise applications with Spring Boot.",
      longDescription: "A comprehensive microservices architecture built with Spring Boot. Includes service discovery, API gateway, distributed tracing, and containerized deployment with Docker and Kubernetes.",
      category: "api",
      technologies: [
        { icon: SiSpringboot, name: "Spring Boot", color: "text-green-500" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: FaNodeJs, name: "Docker", color: "text-blue-400" }
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      githubUrl: "https://github.com/username/microservices",
      features: [
        "Service discovery",
        "API gateway",
        "Distributed tracing",
        "Container orchestration",
        "Load balancing"
      ],
      status: "in-progress"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web Development", count: projects.filter(p => p.category === "web").length },
    { id: "desktop", name: "Desktop Apps", count: projects.filter(p => p.category === "desktop").length },
    { id: "api", name: "API Services", count: projects.filter(p => p.category === "api").length }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-400 bg-green-400/10";
      case "in-progress": return "text-yellow-400 bg-yellow-400/10";
      case "planned": return "text-blue-400 bg-blue-400/10";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Planned";
      default: return "Unknown";
    }
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
              My Projects
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Explore my portfolio of web applications, desktop software, and API services. 
            Each project represents a unique challenge and innovative solution.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg"
                  : "glass-light text-text-secondary hover:text-text-primary hover:bg-white/10"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                onClick={() => setSelectedProject(project)}
                className="glass rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs bg-white/5 px-2 py-1 rounded-full">
                        <tech.icon className={`${tech.color} text-sm`} />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="text-xs bg-white/5 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary-400 transition-colors"
                      >
                        <FaGithub />
                        Code
                      </button>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        className="flex items-center gap-2 text-sm text-text-secondary hover:text-primary-400 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                      {getStatusText(selectedProject.status)}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                          <tech.icon className={`${tech.color} text-xl`} />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary-400 rounded-full" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <button
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all duration-300"
                      >
                        <FaGithub />
                        View Code
                      </button>
                    )}
                    {selectedProject.liveUrl && (
                      <button
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg hover:from-primary-400 hover:to-purple-400 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </button>
                    )}
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