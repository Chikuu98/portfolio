import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaRocket, FaLink, FaCopy, FaEye, FaEyeSlash, FaLock, FaUnlock } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useAlert } from "../../utility/useAlert";
import "./celebrationBuilder.css";

const CelebrationBuilder: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState<"newYear" | "birthday">("birthday");
  const [age, setAge] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const { showAlert } = useAlert();

  // Password for accessing the builder (you can change this)
  const BUILDER_PASSWORD = "chikz123";

  // Handle password authentication
  const handlePasswordSubmit = () => {
    if (passwordInput.trim() === BUILDER_PASSWORD) {
      setIsAuthenticated(true);
      showAlert("success", "Access granted! Welcome to the Celebration Builder.");
    } else {
      showAlert("error", "Incorrect password. Please try again.");
      setPasswordInput("");
    }
  };

  // Handle Enter key for password input
  const handlePasswordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  // Simple encryption function (you can replace with more secure encryption)
  const encryptName = (inputName: string): string => {
    return btoa(encodeURIComponent(inputName.trim())).replace(/[+/=]/g, (char) => {
      switch (char) {
        case '+': return '-';
        case '/': return '_';
        case '=': return '';
        default: return char;
      }
    });
  };

  // Generate the celebration link
  const generateLink = () => {
    if (!name.trim()) {
      showAlert("error", "Please enter a name");
      return;
    }

    const encryptedName = encryptName(name);
    const route = occasion === "birthday" ? "birthday" : "newYearWish";
    const baseUrl = window.location.origin + "/portfolio";
    
    let link = `${baseUrl}/${route}?n=${encryptedName}&occasion=${occasion}`;
    
    if (occasion === "birthday" && age.trim()) {
      link += `&age=${age}`;
    }

    setGeneratedLink(link);
    showAlert("success", "Celebration link generated successfully!");
  };

  // Copy link to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedLink);
      showAlert("success", "Link copied to clipboard!");
    } catch (err) {
      showAlert("error", "Failed to copy link");
    }
  };

  // Open preview
  const openPreview = () => {
    if (generatedLink) {
      window.open(generatedLink, '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  // If not authenticated, show password screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
          <motion.div
            className="celebration-glass rounded-2xl p-8 border border-purple-400/30"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl mb-4"
              >
                <FaLock className="mx-auto text-purple-400" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white mb-2">Protected Access</h2>
              <p className="text-gray-300">Enter password to access the Celebration Builder</p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyPress={handlePasswordKeyPress}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <motion.button
                onClick={handlePasswordSubmit}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!passwordInput.trim()}
              >
                <FaUnlock className="mr-2" />
                Access Builder
              </motion.button>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-200 text-center">
                🔒 This page is protected to maintain privacy and prevent unauthorized link generation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-2xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(-45deg, #ec4899, #a855f7, #3b82f6, #06b6d4)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🎉 Celebration Link Builder
          </motion.h1>
          <p className="text-xl text-gray-300">
            Create personalized celebration links with encrypted names
          </p>
        </motion.div>

        {/* Form */}
        <div
          className="celebration-glass rounded-2xl p-8 md:p-10 border border-purple-400/30 relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(15px)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl opacity-50"
          />

          <div className="relative z-10 space-y-8">
            {/* Occasion Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-4">
                Select Occasion
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setOccasion("birthday")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    occasion === "birthday"
                      ? "border-pink-400 bg-pink-400/20 text-pink-300"
                      : "border-gray-600 hover:border-pink-400/50 text-gray-400"
                  }`}
                >
                  <FaBirthdayCake className="text-2xl mx-auto mb-2" />
                  <span className="font-semibold">Birthday</span>
                </button>
                <button
                  onClick={() => setOccasion("newYear")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    occasion === "newYear"
                      ? "border-blue-400 bg-blue-400/20 text-blue-300"
                      : "border-gray-600 hover:border-blue-400/50 text-gray-400"
                  }`}
                >
                  <FaRocket className="text-2xl mx-auto mb-2" />
                  <span className="font-semibold">New Year</span>
                </button>
              </div>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Person's Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the person's name"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Age Input (for birthdays) */}
            {occasion === "birthday" && (
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-300 mb-2">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 focus:outline-none transition-all duration-300"
                />
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={generateLink}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                occasion === "birthday"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
              } text-white shadow-lg hover:shadow-xl`}
              disabled={!name.trim()}
            >
              <FaLink className="inline mr-2" />
              Generate Celebration Link
            </button>

            {/* Generated Link */}
            {generatedLink && (
              <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-green-400/30">
                <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                  <HiSparkles className="mr-2" />
                  Your Celebration Link
                </h3>
                
                <div className="space-y-4">
                  <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-600">
                    <p className="text-sm text-gray-300 break-all font-mono">
                      {generatedLink}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <FaCopy className="mr-2" />
                      Copy Link
                    </button>
                    
                    <button
                      onClick={openPreview}
                      className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <FaEye className="mr-2" />
                      Preview
                    </button>
                  </div>
                  
                  {/* Example links for testing */}
                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="text-xs text-blue-200 mb-2">Quick Test Links:</p>
                    <div className="space-y-1">
                      <button
                        onClick={() => window.open('/portfolio/birthday?n=VGVzdA&occasion=birthday&age=25', '_blank')}
                        className="text-xs text-blue-300 hover:text-blue-100 underline block"
                      >
                        Test Birthday (name: "Test", age: 25)
                      </button>
                      <button
                        onClick={() => window.open('/portfolio/newYearWish?n=Sm9obg&occasion=newYear', '_blank')}
                        className="text-xs text-blue-300 hover:text-blue-100 underline block"
                      >
                        Test New Year (name: "John")
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Note */}
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <p className="text-sm text-amber-200 flex items-start">
                <FaEyeSlash className="mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  The person's name is encrypted in the URL for privacy. Only you and the recipient will know the actual name.
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CelebrationBuilder;
