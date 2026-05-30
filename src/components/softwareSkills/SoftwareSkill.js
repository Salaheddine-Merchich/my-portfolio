import React, {useContext} from "react";
import {motion} from "framer-motion";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {skillsSection.softwareSkills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.1 }}
            className="flex flex-col items-center group"
          >
            <div className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 shadow-md ${
              isDark 
                ? "bg-gray-800 border border-gray-700 group-hover:border-primary group-hover:bg-gray-700" 
                : "bg-white border border-gray-100 group-hover:border-primary group-hover:bg-gray-50"
            }`}>
              <i className={`${skill.fontAwesomeClassname} text-3xl transition-colors duration-300 ${
                isDark ? "text-gray-400 group-hover:text-primary" : "text-gray-500 group-hover:text-primary"
              }`}></i>
            </div>
            <p className={`mt-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
              isDark ? "text-gray-500 group-hover:text-gray-300" : "text-gray-400 group-hover:text-gray-600"
            }`}>
              {skill.skillName}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
