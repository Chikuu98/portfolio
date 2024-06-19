import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import {
  Facebook,
  Instagram,
  Linkedin,
  Threads,
  Youtube,
} from "../../assets/icons/socialMedia";

const socialMediaLinks = [
  {
    url: "https://www.linkedin.com/company/waverista",
    icon: Linkedin,
    alt: "Linkedin",
  },
  {
    url: "https://www.instagram.com/waverista",
    icon: Instagram,
    alt: "Instagram",
  },
  {
    url: "https://www.facebook.com/waveristafb",
    icon: Facebook,
    alt: "Facebook",
  },
  { url: "https://www.threads.net/@waverista", icon: Threads, alt: "Threads" },
  { url: "https://youtube.com/@waverista", icon: Youtube, alt: "Youtube" },
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