import React, {useContext} from "react";
import {motion} from "framer-motion";
import StyleContext from "../../contexts/StyleContext";
import {Heart, Mail, Phone} from "lucide-react";
import {socialMediaLinks} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <footer
      className={`py-12 border-t transition-all duration-300 ${
        isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-100"
      }`}
    >
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6"
      >
        <div className="flex items-center gap-6">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <i className="fab fa-github text-[24px]"></i>
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <i className="fab fa-linkedin-in text-[24px]"></i>
            </a>
          )}
          {socialMediaLinks.gmail && (
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Mail size={24} />
            </a>
          )}
          {socialMediaLinks.phone && (
            <a
              href={`tel:${socialMediaLinks.phone}`}
              className={`transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Phone size={24} />
            </a>
          )}
        </div>

        <p
          className={`flex items-center gap-2 text-lg font-medium ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Made with{" "}
          <Heart
            size={18}
            className="text-red-500 fill-red-500 animate-pulse"
          />{" "}
          by Salaheddine Merchich
        </p>

        <p
          className={`text-sm tracking-wide ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Built with <span className="text-primary font-bold">React</span> +{" "}
          <span className="text-primary font-bold">Tailwind CSS</span> +{" "}
          <span className="text-primary font-bold">Framer Motion</span>
        </p>

        <div className="pt-4">
          <p
            className={`text-xs ${isDark ? "text-gray-600" : "text-gray-400"}`}
          >
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
