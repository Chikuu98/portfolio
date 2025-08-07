import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaStar, FaHeart, FaRocket, FaBirthdayCake } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { GiBalloons, GiPartyHat, GiCakeSlice } from "react-icons/gi";
import "./newYearWish.css";

const CelebrationPage: React.FC = () => {
  const [celebrateClicked, setCelebrateClicked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  
  // Parse URL parameters and path
  const params = new URLSearchParams(window.location.search);
  const encodedName = params.get("name") || params.get("n"); // Support both 'name' and 'n' parameters
  const occasionParam = params.get("occasion");
  const age = params.get("age");
  
  // Decrypt name function
  const decryptName = (encryptedName: string): string => {
    try {
      // Handle URL-safe base64
      const base64 = encryptedName.replace(/-/g, '+').replace(/_/g, '/');
      // Add padding if needed
      const padded = base64 + '==='.slice((base64.length + 3) % 4);
      return decodeURIComponent(atob(padded));
    } catch (error) {
      // If decryption fails, return the original string
      return encryptedName;
    }
  };
  
  const name = encodedName ? decryptName(encodedName) : "Friend";
  
  // Determine occasion from URL path or parameter
  const currentPath = window.location.pathname;
  const isBirthdayPath = currentPath.includes('/birthday');
  const occasion = occasionParam || (isBirthdayPath ? "birthday" : "newYear");
  
  // Dynamic content based on occasion
  const isBirthday = occasion === "birthday";
  
  const occasionConfig = {
    newYear: {
      title: "Happy New Year",
      subtitle: currentYear,
      emoji: "🎉",
      secondaryEmoji: "🎊",
      message: `🌟 May this new year bring you endless possibilities, incredible adventures, and all the success you've been dreaming of. Here's to making ${currentYear} your most amazing year yet! ✨`,
      buttonText: "Start the Celebration",
      buttonActiveText: "Amazing! Let's Party!",
      celebrationMessage: "🎉 Hooray! Wishing you the most spectacular year ahead! 🎊",
      colors: {
        primary: "from-purple-500 to-blue-500",
        secondary: "from-yellow-400 to-orange-400",
        accent: "from-pink-500 via-yellow-500 to-purple-500",
        background: "from-slate-950 via-purple-950/60 to-indigo-950/60"
      },
      icons: [FaStar, HiSparkles, FaHeart, FaGift, FaRocket],
      wishes: [
        {
          icon: FaStar,
          title: "Success",
          description: "May all your goals turn into achievements",
          color: "yellow",
          bgGradient: "from-yellow-400/20 to-orange-400/20",
          iconColor: "text-yellow-400",
        },
        {
          icon: FaHeart,
          title: "Happiness",
          description: "Filled with joy, love, and wonderful moments",
          color: "pink",
          bgGradient: "from-pink-400/20 to-rose-400/20",
          iconColor: "text-pink-400",
        },
        {
          icon: HiSparkles,
          title: "Growth",
          description: "New opportunities and endless possibilities",
          color: "cyan",
          bgGradient: "from-cyan-400/20 to-blue-400/20",
          iconColor: "text-cyan-400",
        },
      ]
    },
    birthday: {
      title: "Happy Birthday",
      subtitle: age ? `${age} Years of Awesome!` : "Another Year of Awesome!",
      emoji: "🎂",
      secondaryEmoji: "🎈",
      message: `🎉 Another year around the sun, another year of incredible memories and achievements! ${age ? `Celebrating ${age} amazing years of you!` : 'Here\'s to celebrating another fantastic year of your life!'} May this new chapter be filled with boundless joy, exciting adventures, and all your heart desires! 🌟`,
      buttonText: "Let's Celebrate",
      buttonActiveText: "Best Birthday Ever!",
      celebrationMessage: "🎂 Happy Birthday! May all your wishes come true! 🎈",
      colors: {
        primary: "from-pink-500 to-purple-500",
        secondary: "from-yellow-400 to-pink-400",
        accent: "from-pink-500 via-purple-500 to-blue-500",
        background: "from-pink-950/60 via-purple-950/60 to-blue-950/60"
      },
      icons: [FaBirthdayCake, GiBalloons, FaGift, GiPartyHat, GiCakeSlice],
      wishes: [
        {
          icon: FaBirthdayCake,
          title: "Joy",
          description: "May your special day be filled with endless joy",
          color: "pink",
          bgGradient: "from-pink-400/20 to-rose-400/20",
          iconColor: "text-pink-400",
        },
        {
          icon: GiBalloons,
          title: "Dreams",
          description: "May all your birthday wishes come true",
          color: "purple",
          bgGradient: "from-purple-400/20 to-violet-400/20",
          iconColor: "text-purple-400",
        },
        {
          icon: FaGift,
          title: "Blessings",
          description: "Surrounded by love, laughter, and surprises",
          color: "blue",
          bgGradient: "from-blue-400/20 to-cyan-400/20",
          iconColor: "text-blue-400",
        },
      ]
    }
  };
  
  const config = occasionConfig[isBirthday ? 'birthday' : 'newYear'];

  const createFirework = () => {
    const fireworksContainer = document.querySelector(".fireworks");
    if (!fireworksContainer) return;

    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.animationDuration = `${Math.random() * 2 + 1}s`;
    firework.style.backgroundColor = getRandomColor();
    firework.style.boxShadow = `0 0 20px ${getRandomColor()}, 0 0 40px ${getRandomColor()}`;
    fireworksContainer.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 3000);
  };

  const createBurst = () => {
    const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#32CD32', '#9370DB'];
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const burst = document.createElement("div");
        burst.classList.add("firework");
        burst.style.left = `${Math.random() * 100}%`;
        burst.style.top = `${Math.random() * 100}%`;
        burst.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        burst.style.boxShadow = `0 0 30px ${burst.style.backgroundColor}`;
        burst.style.animation = `sparkle ${Math.random() * 1 + 0.5}s ease-out`;
        
        const container = document.querySelector(".fireworks");
        if (container) {
          container.appendChild(burst);
          setTimeout(() => burst.remove(), 2000);
        }
      }, i * 50);
    }
  };

  useEffect(() => {
    const interval = setInterval(createFirework, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCelebrateClick = () => {
    setCelebrateClicked(true);
    setShowConfetti(true);

    // Create massive burst of fireworks
    createBurst();
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        createFirework();
      }, i * 30);
    }

    setTimeout(() => {
      setCelebrateClicked(false);
      setShowConfetti(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    icon: config.icons[i % config.icons.length],
    delay: i * 0.3,
    duration: 4 + (i % 3),
    size: Math.random() * 20 + 15,
  }));

  return (
    <div className="min-h-screen bg-background-primary text-text-primary relative overflow-hidden">
      {/* Dynamic Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.colors.background}`} />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-cyan-900/20"
          animate={{
            background: isBirthday ? [
              "linear-gradient(45deg, rgba(236, 72, 153, 0.2), transparent, rgba(168, 85, 247, 0.2))",
              "linear-gradient(135deg, rgba(168, 85, 247, 0.2), transparent, rgba(59, 130, 246, 0.2))",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.2), transparent, rgba(236, 72, 153, 0.2))",
              "linear-gradient(315deg, rgba(168, 85, 247, 0.2), transparent, rgba(236, 72, 153, 0.2))",
            ] : [
              "linear-gradient(45deg, rgba(219, 39, 119, 0.2), transparent, rgba(6, 182, 212, 0.2))",
              "linear-gradient(135deg, rgba(6, 182, 212, 0.2), transparent, rgba(168, 85, 247, 0.2))",
              "linear-gradient(225deg, rgba(168, 85, 247, 0.2), transparent, rgba(219, 39, 119, 0.2))",
              "linear-gradient(315deg, rgba(6, 182, 212, 0.2), transparent, rgba(219, 39, 119, 0.2))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Enhanced Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 0.8, 1],
            opacity: [0.3, 0.7, 0.4, 0.3],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            rotate: -360,
            scale: [1.2, 0.8, 1.5, 1.2],
            opacity: [0.6, 0.3, 0.8, 0.6],
            x: [50, -50, 50],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-orange-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 0.9, 1],
            opacity: [0.2, 0.6, 0.3, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Additional moving orbs for more dynamic effect */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-bl from-green-400/25 to-emerald-500/15 rounded-full blur-2xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.4, 0.8, 0.3, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-40 h-40 bg-gradient-to-tl from-red-400/20 to-pink-500/15 rounded-full blur-2xl"
          animate={{
            x: [-50, 50, -100, -50],
            y: [0, -50, 50, 0],
            scale: [0.8, 1.3, 1, 0.8],
            opacity: [0.3, 0.7, 0.4, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Fireworks Container */}
      <div className="fireworks absolute top-0 left-0 w-full h-full pointer-events-none z-10"></div>

      {/* Enhanced Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute pointer-events-none z-10"
          style={{
            fontSize: `${element.size}px`,
            color: getRandomColor(),
            filter: 'drop-shadow(0 0 10px currentColor)',
          }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 800,
            rotate: 0,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: -100,
            rotate: [0, 360, 720],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1.2, 0],
            x: [
              Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
              Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
            ],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, -30, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <element.icon />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Dynamic Year/Age Display */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div 
              className="inline-flex items-center gap-4 glass rounded-full px-8 py-4 mb-6 border border-yellow-400/30"
              whileHover={{ scale: 1.05, y: -5 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 40px rgba(251, 191, 36, 0.5)",
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                ],
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-3xl">{config.emoji}</span>
              </motion.div>
              <span className={`text-xl font-bold bg-gradient-to-r ${config.colors.secondary} bg-clip-text text-transparent`}>
                {isBirthday ? (age ? `Celebrating ${age} Years!` : "It's Your Special Day!") : `Welcome to ${currentYear}`}
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-3xl">{config.secondaryEmoji}</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Dynamic Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-12 leading-tight"
          >
            <motion.span
              className="block mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: isBirthday 
                  ? "linear-gradient(-45deg, #ec4899, #a855f7, #3b82f6, #06b6d4, #10b981, #ec4899)"
                  : "linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #ff6b6b)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {config.title}
            </motion.span>
            <motion.span
              className={`block bg-gradient-to-r ${config.colors.primary} bg-clip-text text-transparent`}
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(56, 189, 248, 0.5)",
                  "0 0 40px rgba(56, 189, 248, 0.8)",
                  "0 0 20px rgba(56, 189, 248, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {config.subtitle}
            </motion.span>
          </motion.h1>

          {/* Enhanced Personal Greeting */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div 
              className="glass rounded-3xl p-8 md:p-10 mb-8 border border-primary-400/30 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.25)",
              }}
              animate={{
                borderColor: [
                  "rgba(99, 102, 241, 0.3)",
                  "rgba(236, 72, 153, 0.3)",
                  "rgba(6, 182, 212, 0.3)",
                  "rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{
                borderColor: { duration: 4, repeat: Infinity },
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-cyan-500/10 rounded-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-text-secondary">Hello</span>{" "}
                  <motion.span
                    className="bg-gradient-to-r from-primary-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      backgroundPosition: { duration: 3, repeat: Infinity },
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    {name}
                  </motion.span>
                  <motion.span
                    animate={{ 
                      rotate: [0, 20, 0, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity, 
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="inline-block ml-3 text-5xl"
                  >
                    👋
                  </motion.span>
                </h2>

                <motion.p 
                  className="text-xl md:text-2xl text-text-secondary leading-relaxed"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {config.message}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Dynamic Wishes Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {config.wishes.map((wish, index) => (
              <motion.div
                key={index}
                className={`glass rounded-2xl p-8 relative overflow-hidden group cursor-pointer border border-${wish.color}-400/30`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: `0 25px 50px rgba(99, 102, 241, 0.25)`,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {/* Background gradient effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${wish.bgGradient} rounded-2xl`}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <wish.icon className={`text-5xl ${wish.iconColor} mx-auto drop-shadow-lg`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-400">
                    {wish.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {wish.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Celebrate Button */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.button
              onClick={handleCelebrateClick}
              className={`relative px-12 py-6 rounded-3xl font-bold text-2xl transition-all duration-700 overflow-hidden group ${
                celebrateClicked
                  ? `bg-gradient-to-r ${config.colors.accent} shadow-2xl`
                  : `bg-gradient-to-r ${config.colors.primary} hover:from-primary-400 hover:to-purple-400 shadow-xl`
              }`}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={celebrateClicked ? { 
                scale: [1, 1.1, 1], 
                rotateZ: [0, 5, -5, 0],
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                  "0 0 60px rgba(251, 191, 36, 0.8)",
                  "0 0 20px rgba(251, 191, 36, 0.5)",
                ],
              } : {
                boxShadow: [
                  "0 10px 30px rgba(99, 102, 241, 0.3)",
                  "0 15px 40px rgba(99, 102, 241, 0.4)",
                  "0 10px 30px rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{ 
                duration: celebrateClicked ? 0.5 : 2,
                repeat: Infinity,
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-pink-400/30 to-purple-400/30"
                animate={{
                  x: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <span className="relative z-10 flex items-center gap-4">
                <motion.span
                  animate={{ rotate: celebrateClicked ? 360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl"
                >
                  {config.emoji}
                </motion.span>
                <span>
                  {celebrateClicked ? config.buttonActiveText : config.buttonText}
                </span>
                <motion.span
                  animate={{ rotate: celebrateClicked ? -360 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl"
                >
                  {config.secondaryEmoji}
                </motion.span>
              </span>

              {/* Burst effect when clicked */}
              {celebrateClicked && (
                <>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/40 to-pink-400/40 rounded-3xl"
                    animate={{
                      scale: [0, 2.5],
                      opacity: [1, 0],
                    }}
                    transition={{ duration: 0.8, repeat: 2 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-cyan-400/40 rounded-3xl"
                    animate={{
                      scale: [0, 3],
                      opacity: [1, 0],
                    }}
                    transition={{ duration: 1, delay: 0.2, repeat: 2 }}
                  />
                </>
              )}

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Confetti Message */}
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.8 }}
                className="mb-12"
              >
                <motion.div 
                  className="glass rounded-2xl p-8 bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20 border-2 border-yellow-400/50 relative overflow-hidden"
                  animate={{
                    borderColor: [
                      "rgba(251, 191, 36, 0.5)",
                      "rgba(236, 72, 153, 0.5)",
                      "rgba(168, 85, 247, 0.5)",
                      "rgba(251, 191, 36, 0.5)",
                    ],
                    boxShadow: [
                      "0 0 30px rgba(251, 191, 36, 0.3)",
                      "0 0 50px rgba(236, 72, 153, 0.3)",
                      "0 0 30px rgba(168, 85, 247, 0.3)",
                      "0 0 30px rgba(251, 191, 36, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Animated sparkles background */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-center relative z-10"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 20px rgba(251, 191, 36, 0.8)",
                        "0 0 30px rgba(251, 191, 36, 1)",
                        "0 0 20px rgba(251, 191, 36, 0.8)",
                      ],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{
                      background: "linear-gradient(-45deg, #fbbf24, #ec4899, #a855f7, #06b6d4)",
                      backgroundSize: "400% 400%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gradient-shift 3s ease infinite",
                    }}                    >
                      {config.celebrationMessage}
                    </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Footer Message */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="glass rounded-xl p-6 border border-primary-400/30"
              animate={{
                borderColor: [
                  "rgba(99, 102, 241, 0.3)",
                  "rgba(99, 102, 241, 0.6)",
                  "rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-lg text-text-secondary">
                Made{" "}
                <motion.span
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="inline-block text-red-400 text-xl"
                >
                </motion.span>
                by{" "}
                <motion.span 
                  className="text-primary-400 font-bold text-xl"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#fbbf24",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Chiran
                </motion.span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const getRandomColor = () => {
  const colors = [
    "#FF6D00",
    "#FF4081",
    "#4CAF50",
    "#00BCD4",
    "#9C27B0",
    "#FFC107",
    "#FFEB3B",
    "#E91E63",
    "#3F51B5",
    "#00E676",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default CelebrationPage;
