import React, {useContext} from "react";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import FadeInView from "../../components/fadeIn/FadeInView";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {CircleCheck} from "lucide-react";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section
      className="py-20 px-6 max-w-7xl mx-auto"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeInView variant="left" className="flex-1 w-full hidden lg:block">
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
            <img
              alt="Developer working on code"
              src="/hero-illustration.svg"
              width="400"
              height="320"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </FadeInView>

        <FadeInView variant="right" className="flex-1">
          <h2
            id="skills-heading"
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {skillsSection.title}
          </h2>
          <p
            className={`text-lg lg:text-xl font-semibold mb-8 uppercase tracking-widest text-primary`}
          >
            {skillsSection.subTitle}
          </p>

          <div className="space-y-4 mb-10">
            {skillsSection.skills.map((skill, i) => (
              <div key={i} className="flex items-start gap-3">
                <CircleCheck size={24} className="text-primary shrink-0 mt-1" />
                <p
                  className={`text-lg ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {skill}
                </p>
              </div>
            ))}
          </div>

          <SoftwareSkill />
        </FadeInView>
      </div>
    </section>
  );
}
