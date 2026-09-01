import React from "react";
import {Mail, Phone} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "../icons/BrandIcons";
import {socialMediaLinks} from "../../portfolio";

const socialIconButtonClass =
  "inline-flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-105";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="flex flex-row flex-wrap items-center gap-3">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className={socialIconButtonClass}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <GithubIcon size={24} />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className={socialIconButtonClass}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon size={24} />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className={socialIconButtonClass}
          aria-label="Send email"
        >
          <Mail size={24} aria-hidden="true" />
        </a>
      ) : null}

      {socialMediaLinks.phone ? (
        <a
          href={`tel:${socialMediaLinks.phone}`}
          className={socialIconButtonClass}
          aria-label="Call phone number"
        >
          <Phone size={24} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
