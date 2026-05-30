import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, download}) {
  return (
    <a
      className={`main-button ${className}`}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      download={download}
    >
      {text}
    </a>
  );
}
