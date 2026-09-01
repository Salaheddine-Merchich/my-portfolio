import React, {useContext} from "react";
import {config} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faPython,
  faReact,
  faDocker,
  faGit,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faLeaf,
  faProjectDiagram,
  faTerminal,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

config.autoAddCss = false;

const SKILL_ICONS = {
  Java: faJava,
  Spring: faLeaf,
  Python: faPython,
  "C++": faCode,
  JavaScript: faJs,
  TypeScript: faJs,
  React: faReact,
  "React Native": faReact,
  PostgreSQL: faDatabase,
  MySQL: faDatabase,
  Neo4j: faProjectDiagram,
  Supabase: faBolt,
  Docker: faDocker,
  Postman: faTerminal,
  GitHub: faGithub,
  Git: faGit
};

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {skillsSection.softwareSkills.map((skill, i) => {
          const icon = SKILL_ICONS[skill.skillName] || faCode;
          return (
            <div
              key={i}
              className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 shadow-md ${
                  isDark
                    ? "bg-gray-800 border border-gray-700 group-hover:border-primary group-hover:bg-gray-700"
                    : "bg-white border border-gray-100 group-hover:border-primary group-hover:bg-gray-50"
                }`}
              >
                <FontAwesomeIcon
                  icon={icon}
                  className={`text-3xl transition-colors duration-300 ${
                    isDark
                      ? "text-gray-400 group-hover:text-primary"
                      : "text-gray-500 group-hover:text-primary"
                  }`}
                />
              </div>
              <p
                className={`mt-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isDark
                    ? "text-gray-500 group-hover:text-gray-300"
                    : "text-gray-400 group-hover:text-gray-600"
                }`}
              >
                {skill.skillName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
