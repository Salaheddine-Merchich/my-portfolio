import React, {useContext} from "react";
import {
  Braces,
  Coffee,
  Database,
  GitBranch,
  Leaf,
  Smartphone,
  Terminal,
  Zap,
  Code2,
  Container
} from "lucide-react";
import {GithubIcon} from "../icons/BrandIcons";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const SKILL_ICONS = {
  Java: Coffee,
  Spring: Leaf,
  Python: Code2,
  "C++": Braces,
  JavaScript: Braces,
  TypeScript: Braces,
  React: Code2,
  "React Native": Smartphone,
  PostgreSQL: Database,
  MySQL: Database,
  Neo4j: GitBranch,
  Supabase: Zap,
  Docker: Container,
  Postman: Terminal,
  GitHub: GithubIcon,
  Git: GitBranch
};

function SkillIcon({skillName, className}) {
  const Icon = SKILL_ICONS[skillName];
  if (!Icon) {
    return <Code2 className={className} aria-hidden="true" />;
  }
  if (skillName === "GitHub") {
    return <GithubIcon className={className} size={28} />;
  }
  return <Icon className={className} aria-hidden="true" />;
}

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-center lg:justify-start gap-6">
        {skillsSection.softwareSkills.map((skill, i) => (
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
              <SkillIcon
                skillName={skill.skillName}
                className={`w-7 h-7 transition-colors duration-300 ${
                  isDark
                    ? "text-gray-300 group-hover:text-primary"
                    : "text-gray-600 group-hover:text-primary"
                }`}
              />
            </div>
            <p
              className={`mt-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                isDark
                  ? "text-gray-300 group-hover:text-white"
                  : "text-gray-600 group-hover:text-gray-900"
              }`}
            >
              {skill.skillName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
