import React from "react";
import {Mail, Phone} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "../icons/BrandIcons";
import {socialMediaLinks} from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="flex flex-row flex-nowrap items-center gap-3">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="inline-flex min-w-[48px] min-h-[48px] rounded-full transition-all hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <div
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20"
          >
            <GithubIcon size={24} />
          </div>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="inline-flex min-w-[48px] min-h-[48px] rounded-full transition-all hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <div
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20"
          >
            <LinkedinIcon size={24} />
          </div>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="inline-flex min-w-[48px] min-h-[48px] rounded-full transition-all hover:scale-105"
          aria-label="Send email"
        >
          <div
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20"
          >
            <Mail size={24} className="shrink-0" aria-hidden="true" />
          </div>
        </a>
      ) : null}

      {socialMediaLinks.phone ? (
        <a
          href={`tel:${socialMediaLinks.phone}`}
          className="inline-flex min-w-[48px] min-h-[48px] rounded-full transition-all hover:scale-105"
          aria-label="Call phone number"
        >
          <div
            className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary/20"
          >
            <Phone size={24} className="shrink-0" aria-hidden="true" />
          </div>
        </a>
      ) : null}
    </div>
  );
}
