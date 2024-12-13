import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt } from "react-icons/fa";

const DownloadCVButton: React.FC = () => {
  return (
    <motion.div 
      className="text-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.a
        href="/cv.pdf"
        download="CHIRAN_JEEWANTHA_CV.pdf"
        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-3 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-glow overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        
        {/* Icon */}
        <motion.div
          className="relative z-10"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <FaFileAlt className="text-xl" />
        </motion.div>
        
        {/* Text */}
        <span className="relative z-10">Download My CV</span>
        
        {/* Download icon */}
        <motion.div
          className="relative z-10"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaDownload className="text-lg" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default DownloadCVButton;
