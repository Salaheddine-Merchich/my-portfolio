import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, resumeFiles} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div
      className="greet-main px-6 py-10 lg:py-20 max-w-7xl mx-auto"
      id="greeting"
    >
      <div className="greeting-main flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="greeting-text-div flex-1 text-center lg:text-left">
          <div>
            <h1
              className={`text-4xl lg:text-6xl font-bold mb-6 tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {greeting.title}{" "}
              <span className="inline-block animate-wave">{emoji("👋")}</span>
            </h1>
            <p
              className={`text-lg lg:text-xl leading-relaxed mb-8 font-medium ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {greeting.subTitle}
            </p>
            <div className="flex justify-center lg:justify-start mt-8">
              <SocialMedia />
            </div>
            <div className="button-greeting-div flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
              <Button
                text="Contact me"
                href="#contact"
                className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
              />
              {greeting.resumeLink && (
                <>
                  <Button
                    text={resumeFiles.fr.label}
                    href={resumeFiles.fr.href}
                    download={resumeFiles.fr.download}
                    className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                  />
                  <Button
                    text={resumeFiles.en.label}
                    href={resumeFiles.en.href}
                    download={resumeFiles.en.download}
                    className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div flex-1 max-w-md lg:max-w-none w-full mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500"></div>
            <img
              alt="Software developer illustration"
              src="/hero-illustration.svg"
              width="500"
              height="400"
              className="w-full h-auto max-h-[280px] mx-auto object-contain drop-shadow-2xl transform group-hover:rotate-1 transition-transform duration-500"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
