import { Disclosure } from "@headlessui/react";
import React, { useEffect } from "react";
import { HiMiniBars3, HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import myLogo from "/c.svg";
import { motion } from "framer-motion";

const navigation = [
  { name: "ABOUT ME", to: "/about", current: false },
  { name: "SERVICES", to: "/service", current: false },
  { name: "TECHNOLOGIES", to: "/technologies", current: false },
  { name: "PROJECTS", to: "/projects", current: false },
  { name: "CELEBRATION", to: "/celebration-builder", current: false },
];

// Custom hook to lock body scroll
const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPosition = window.getComputedStyle(document.body).position;
    
    if (isLocked) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = originalStyle;
      document.body.style.position = originalPosition;
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.position = originalPosition;
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.left = '';
    };
  }, [isLocked]);
};

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="!h-[72px] z-50 fixed top-0 left-0 right-0 backdrop-blur-xl bg-background-glass border-b border-white/10"
    >
      <Disclosure as="nav" className="h-full">
        {({ open, close }) => {
          // Use the custom hook to lock body scroll
          useBodyScrollLock(open);

          return (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
              <div className="relative flex h-full items-center justify-between">
                {/* Logo Section - Always visible */}
                <div className="flex items-center">
                  <Link to="/" className="group focus:outline-none">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img 
                        className="h-8 sm:h-10 w-auto group-hover:rotate-12 transition-transform duration-300" 
                        src={myLogo} 
                        alt="ChiranJ"
                        whileHover={{ rotate: 12 }}
                      />
                      <span className="font-bold text-text-primary font-display tracking-wide text-xl sm:text-2xl ml-2 sm:ml-3 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                        ChiranJ
                      </span>
                    </motion.div>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                  <div className="flex space-x-2">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.to;
                      return (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={twMerge([
                            "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none",
                            isActive
                              ? "text-white bg-white/10"
                              : "text-text-secondary hover:text-white hover:bg-white/5",
                          ])}
                        >
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                          {isActive && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-400/20 rounded-lg"
                              initial={false}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                  
                  <Link to="/sendMail">
                    <motion.button
                      type="button"
                      className="relative ml-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">SEND MAIL</span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-xl p-2 text-text-secondary hover:bg-white/10 hover:text-white transition-all duration-300">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {open ? <HiMiniBars3CenterLeft size={24} /> : <HiMiniBars3 size={24} />}
                    </motion.div>
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            {open && (
              <Disclosure.Panel 
                className="sm:hidden"
                static
              >
                <motion.div 
                  className="fixed inset-0 bg-black"
                  style={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0,
                    zIndex: 2147483647, // Maximum z-index value
                    backgroundColor: '#000000',
                    width: '100vw',
                    height: '100vh'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    // Close menu when clicking anywhere
                    close();
                  }}
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950" />
                  
                  {/* Floating orbs for visual interest */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                      className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1] 
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                      animate={{ 
                        rotate: -360,
                        scale: [1.2, 1, 1.2] 
                      }}
                      transition={{ 
                        duration: 25, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                    />
                  </div>
                  
                  {/* Close button - Fixed position outside scrollable area */}
                  <motion.button
                    className="fixed top-8 right-8 z-[60] p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 group"
                    onClick={() => {
                      close();
                    }}
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HiXMark size={24} className="text-white group-hover:text-primary-400 transition-colors duration-300" />
                  </motion.button>
                  
                  {/* Menu content */}
                  <div 
                    className="relative z-50 h-full overflow-y-auto px-8 py-20"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking menu content
                  >

                  {/* Header section */}
                  <motion.div 
                    className="text-center mb-12 pt-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent mb-2">
                      Navigation
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto" />
                  </motion.div>

                  {/* Menu items container */}
                  <div className="max-w-sm mx-auto w-full space-y-6 pb-12">
                    {/* Home link */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Disclosure.Button
                        as={Link}
                        to="/"
                        className="group relative w-full flex items-center justify-between p-6 bg-gradient-to-r from-white/5 to-white/10 hover:from-primary-500/20 hover:to-primary-600/20 rounded-2xl border border-white/10 hover:border-primary-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                      >
                        <span className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                          HOME
                        </span>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-primary-400/20 flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-primary-400" />
                        </motion.div>
                      </Disclosure.Button>
                    </motion.div>

                    {/* Navigation links */}
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      >
                        <Disclosure.Button
                          as={Link}
                          to={item.to}
                          className="group relative w-full flex items-center justify-between p-6 bg-gradient-to-r from-white/5 to-white/10 hover:from-primary-500/20 hover:to-primary-600/20 rounded-2xl border border-white/10 hover:border-primary-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                        >
                          <span className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">
                            {item.name}
                          </span>
                          <motion.div
                            className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-primary-400/20 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-primary-400" />
                          </motion.div>
                        </Disclosure.Button>
                      </motion.div>
                    ))}
                    
                    {/* Send Mail Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="pt-6"
                    >
                      <Disclosure.Button
                        as={Link}
                        to="/sendMail"
                        className="group relative w-full p-6 bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 hover:from-primary-700 hover:via-primary-600 hover:to-purple-700 rounded-2xl font-bold text-2xl text-white transition-all duration-300 hover:scale-[1.02] shadow-2xl hover:shadow-primary-500/25 border border-primary-400/50 hover:border-primary-300"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <span>SEND MAIL</span>
                          <motion.span 
                            className="ml-3 text-3xl"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Disclosure.Button>
                    </motion.div>
                  </div>

                  {/* Footer section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-center mt-12 pb-8"
                  >
                    <p className="text-gray-400 text-sm mb-2">
                      Tap anywhere outside to close
                    </p>
                    <div className="flex justify-center">
                      <motion.div 
                        className="w-12 h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                  </div>
                </motion.div>
              </Disclosure.Panel>
            )}
          </>
          );
        }}
      </Disclosure>
    </motion.div>
  );
};

export default Header;
