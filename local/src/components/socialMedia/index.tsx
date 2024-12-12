import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  Instagram,
  Linkedin,
  Threads,
  Youtube,
  Github, // Make sure to import the Github icon
  X, // Make sure to import the X (Twitter) icon
} from "../../assets/icons/socialMedia";

const socialMediaLinks = [
  {
    url: "https://www.linkedin.com/in/chiranj98/",
    icon: Linkedin,
    alt: "Linkedin",
  },
  {
    url: "https://github.com/Chikuu98",
    icon: Github,
    alt: "Github",
  },
  {
    url: "https://www.instagram.com/chikuzgram/",
    icon: Instagram,
    alt: "Instagram",
  },

  { 
    url: "https://www.youtube.com/@ChiranJ", 
    icon: Youtube, 
    alt: "Youtube" 
  },
  {
    url: "https://x.com/chikuu98",
    icon: X,
    alt: "X",
  },
  { 
    url: "https://www.threads.net/@chikuz98", 
    icon: Threads, 
    alt: "Threads" 
  },
];

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className }) => {
  return (
    <div className="flex gap-5">
      {socialMediaLinks.map((link, index) => (
        <Link key={index} to={link.url} target="_blank">
          <img
            className={twMerge(["align-bottom", className && className])}
            src={link.icon}
            alt={link.alt}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
