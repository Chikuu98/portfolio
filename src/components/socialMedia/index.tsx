import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Threads,
  Youtube,
  Github,
  X,
} from "../../assets/icons/socialMedia";

const socialMediaLinks = [
  {
    url: "https://www.linkedin.com/in/chiranj98/",
    icon: Linkedin,
    alt: "Linkedin",
    color: "hover:bg-blue-600"
  },
  {
    url: "https://github.com/Chikuu98",
    icon: Github,
    alt: "Github",
    color: "hover:bg-gray-700"
  },
  {
    url: "https://www.instagram.com/chikuzgram/",
    icon: Instagram,
    alt: "Instagram",
    color: "hover:bg-pink-600"
  },
  { 
    url: "https://www.youtube.com/@ChiranJ", 
    icon: Youtube, 
    alt: "Youtube",
    color: "hover:bg-red-600"
  },
  {
    url: "https://x.com/chikuu98",
    icon: X,
    alt: "X",
    color: "hover:bg-black"
  },
  { 
    url: "https://www.threads.net/@chikuz98", 
    icon: Threads, 
    alt: "Threads",
    color: "hover:bg-purple-600"
  },
];

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
  return (
    <div className="flex gap-4">
      {socialMediaLinks.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to={link.url} 
            target="_blank"
            className={twMerge([
              "group relative p-2 rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 border border-white/10 hover:border-white/20",
              link.color
            ])}
          >
            <img
              className={twMerge([
                "align-bottom transition-all duration-300 group-hover:brightness-110", 
                className && className
              ])}
              src={link.icon}
              alt={link.alt}
            />
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMedia;
