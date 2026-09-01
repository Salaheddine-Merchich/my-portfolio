import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {Heart, Mail, Phone} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "../icons/BrandIcons";
import {socialMediaLinks} from "../../portfolio";
import FadeInView from "../fadeIn/FadeInView";

const socialLinkClass = isDark =>
  `inline-flex items-center justify-center min-w-[48px] min-h-[48px] transition-colors ${
    isDark
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-900"
  }`;

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <footer
      className={`py-12 border-t transition-all duration-300 ${
        isDark ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-100"
      }`}
    >
      <FadeInView
        variant="none"
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6"
      >
        <div className="flex items-center gap-3">
          {socialMediaLinks.github && (
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={socialLinkClass(isDark)}
            >
              <GithubIcon size={24} />
            </a>
          )}
          {socialMediaLinks.linkedin && (
            <a
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={socialLinkClass(isDark)}
            >
              <LinkedinIcon size={24} />
            </a>
          )}
          {socialMediaLinks.gmail && (
            <a
              href={`mailto:${socialMediaLinks.gmail}`}
              aria-label="Send email"
              className={socialLinkClass(isDark)}
            >
              <Mail size={24} aria-hidden="true" />
            </a>
          )}
          {socialMediaLinks.phone && (
            <a
              href={`tel:${socialMediaLinks.phone}`}
              aria-label="Call phone number"
              className={socialLinkClass(isDark)}
            >
              <Phone size={24} aria-hidden="true" />
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
            aria-hidden="true"
          />{" "}
          by Salaheddine Merchich
        </p>

        <p
          className={`text-sm tracking-wide ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Built with <span className="text-primary font-bold">React</span> +{" "}
          <span className="text-primary font-bold">Tailwind CSS</span>
        </p>

        <div className="pt-4">
          <p
            className={`text-xs ${isDark ? "text-gray-300" : "text-gray-500"}`}
          >
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </FadeInView>
    </footer>
  );
}
