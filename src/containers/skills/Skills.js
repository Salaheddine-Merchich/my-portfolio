import React, {useContext} from "react";
import {motion} from "framer-motion";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {CircleCheck} from "lucide-react";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="flex-1 w-full"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
            <img
              alt="Developer working on code"
              src={
                require("../../assets/images/skills_viz.svg").default ||
                require("../../assets/images/skills_viz.svg")
              }
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="flex-1"
        >
          <h1
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {skillsSection.title}
          </h1>
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
        </motion.div>
      </div>
    </div>
  );
}
