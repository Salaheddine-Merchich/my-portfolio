import React from "react";
import "./SocialMedia.scss";
import {Mail, Phone} from "lucide-react";
import {GithubIcon, LinkedinIcon} from "../icons/BrandIcons";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <GithubIcon />
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <LinkedinIcon />
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          aria-label="Send email"
        >
          <Mail className="w-5 h-5" aria-hidden="true" />
        </a>
      ) : null}

      {socialMediaLinks.phone ? (
        <a
          href={`tel:${socialMediaLinks.phone}`}
          className="icon-button phone"
          aria-label="Call phone number"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
