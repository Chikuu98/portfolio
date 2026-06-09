import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNestjs, SiMysql, SiElectron, SiDigitalocean, SiGooglecalendar, SiGooglegemini, SiVuedotjs, SiDocker, SiPython, SiGooglemaps, SiSqlite, SiRedis, SiFastify, SiPostgresql } from "react-icons/si";

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
      title: "FitSmart: AI-Powered Wellness Platform",
      description: "A comprehensive full-stack wellness platform providing AI-personalized nutrition and workout plans, real-time progress tracking, and an integrated attendance system.",
      longDescription: "FitSmart is an AI-powered full-stack wellness platform designed to provide personalized nutrition and workout plans with real-time progress tracking. Achieved an A+ grade for this 10-credit capstone project at the University of Moratuwa, it features multi-role authentication (Member, Mentor, Admin), a real-time attendance tracking system, and a community mentorship booking system. Deployed securely on a DigitalOcean Droplet, it integrates Gemini AI for plan generation and Google Calendar for appointment booking.",
      category: "web",
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: SiGooglegemini, name: "Gemini AI", color: "text-purple-400" },
        { icon: SiGooglecalendar, name: "Google Calendar", color: "text-blue-500" },
        { icon: SiDigitalocean, name: "DigitalOcean", color: "text-cyan-500" }
      ],
      image: `${import.meta.env.BASE_URL}projects/fitsmart.png`,
      liveUrl: "https://fitsmart.chiranj.dev/",
      features: [
        "AI-personalized workout and nutrition planning",
        "Real-time member progress and metrics tracking",
        "Mentor session booking and Community Forum",
        "Multi-role user authentication (Member, Mentor, Admin)",
        "Google Calendar-integrated mentorship booking system"
      ],
      status: "completed"
    },
    {
      id: 2,
      title: "Surf Shark: Board Rental Management System",
      description: "An interactive surfboard rental and inventory management system with QR scanning, real-time billing, automatic calculations, and reports.",
      longDescription: "Surf Shark is a specialized web application engineered for surfboard rental shops to manage inventory, active rentals, and billing operations. It features integrated QR code scanning for instant board check-ins and check-outs, automated time and rate calculations, custom digital invoicing, and dynamic monthly revenue reporting dashboards. Designed to streamline beachside rental business operations.",
      category: "web",
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: FaLaravel, name: "Laravel", color: "text-red-600" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" }
      ],
      image: `${import.meta.env.BASE_URL}projects/surfshark.png`,
      liveUrl: "https://surf.chiranj.dev/",
      features: [
        "Interactive dashboard tracking active rentals and board availability",
        "QR code integration for fast checking and identification of equipment",
        "Real-time billing calculation based on flexible rental durations",
        "Automated PDF or digital receipt generation for customers",
        "Sales, inventory, and activity report generators for administration"
      ],
      status: "completed"
    },
    {
      id: 3,
      title: "Attendance Tracking System",
      description: "A high-concurrency enterprise system for real-time attendance monitoring with biometric integration and automated reporting.",
      longDescription: "An enterprise-grade, high-concurrency attendance monitoring system designed for real-time tracking across distributed environments. Integrated with Hikvision Fingerprint Terminals, the system focuses on optimized database query performance and seamless data synchronization. Built with Laravel and Vue.js, running in Docker containers, and featuring automated reporting tools to provide management with data-driven operational insights.",
      category: "web",
      technologies: [
        { icon: FaLaravel, name: "Laravel", color: "text-red-600" },
        { icon: SiVuedotjs, name: "Vue.js", color: "text-emerald-500" },
        { icon: SiDocker, name: "Docker", color: "text-blue-500" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: SiPython, name: "Python", color: "text-yellow-500" }
      ],
      image: `${import.meta.env.BASE_URL}projects/attendance.png`,
      features: [
        "Real-time biometric attendance monitoring with Hikvision integration",
        "High-concurrency query optimization for large-scale databases",
        "Seamless distributed data synchronization across environments",
        "Automated reporting modules for data-driven management insights",
        "Containerized development and deployment using Docker"
      ],
      status: "completed"
    },
    {
      id: 4,
      title: "Road & Infrastructure Management System",
      description: "Developed for the Road Development Authority (RDA) to streamline regional infrastructure planning and resource management.",
      longDescription: "Developed for the Road Development Authority (RDA) to streamline regional infrastructure planning and resource management. The system integrates Google Maps API for interactive, real-time visualization of developed vs. underdeveloped road networks. It also features advanced modules for water supply estimation and milestone-based project progress tracking.",
      category: "web",
      technologies: [
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: FaLaravel, name: "Laravel", color: "text-red-600" },
        { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
        { icon: SiGooglemaps, name: "Google Map API", color: "text-green-500" }
      ],
      image: `${import.meta.env.BASE_URL}projects/road_infra.png`,
      features: [
        "Interactive real-time road network visualization using Google Maps API",
        "Regional infrastructure planning and resource distribution workflows",
        "Advanced modules for public water supply estimation",
        "Milestone-based progress tracking and project lifecycle management"
      ],
      status: "completed"
    },
    {
      id: 5,
      title: "Cross-Platform Jewellery Management System",
      description: "Engineered a specialized ERP solution to manage complex inventory, workshop workflows, and automated billing.",
      longDescription: "A specialized cross-platform ERP solution engineered to manage complex jewellery inventory, workshop workflows, and automated billing. Built with ElectronJS, React, and TypeScript, it ensures offline reliability and data integrity with SQLite. It optimizes business operations by developing detailed sales reporting modules and artisan collaboration tools, styled elegantly with Tailwind CSS.",
      category: "desktop",
      technologies: [
        { icon: SiElectron, name: "ElectronJS", color: "text-cyan-400" },
        { icon: FaReact, name: "React", color: "text-blue-400" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" },
        { icon: SiSqlite, name: "SQLite", color: "text-blue-400" }
      ],
      image: `${import.meta.env.BASE_URL}projects/jewellery.png`,
      features: [
        "Cross-platform desktop application compatibility using ElectronJS",
        "Offline-reliable inventory management with robust SQLite database",
        "Automated billing and detailed sales reporting dashboards",
        "Artisan workflow coordination and workshop assignment tools",
        "Polished user interface styled with Tailwind CSS"
      ],
      status: "completed"
    },
    {
      id: 6,
      title: "Aura: Semantic Search & Recommendation Engine",
      description: "A high-performance microservice API powering real-time semantic query processing and content recommendation.",
      longDescription: "Aura is a high-throughput recommendation and search microservice API. Built with NestJS and Fastify, it translates text content into high-dimensional vector embeddings, indexes them using pgvector in PostgreSQL, and conducts lightning-fast cosine similarity lookups. To cut down embedding computational costs, it implements a Redis-backed semantic cache layer, reducing average response latency by 90% for conceptually similar queries.",
      category: "api",
      technologies: [
        { icon: SiNestjs, name: "NestJS", color: "text-red-500" },
        { icon: SiFastify, name: "Fastify", color: "text-white" },
        { icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
        { icon: SiRedis, name: "Redis Cache", color: "text-red-400" },
        { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" }
      ],
      image: `${import.meta.env.BASE_URL}projects/aura_api.png`,
      features: [
        "AI embedding processing and semantic indexing microservices",
        "Pgvector similarity matching with optimized database indexing",
        "Redis semantic caching layer for speed and token cost reduction",
        "Complete OpenAPI / Swagger endpoint documentation and type-safety",
        "Fully containerized architecture ready for distributed microservices"
      ],
      status: "completed"
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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
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