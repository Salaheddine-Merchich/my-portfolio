import React, {useContext} from "react";
import {motion} from "framer-motion";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {ExternalLink, GitFork} from "lucide-react";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto" id="projects">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="text-center mb-16"
      >
        <h1
          className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {bigProjects.title}
        </h1>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {bigProjects.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bigProjects.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: i * 0.1}}
            whileHover={{y: -10}}
            className={`flex flex-col rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50"
                : "bg-white border border-gray-100 hover:border-primary/30"
            } backdrop-blur-sm`}
          >
            {project.image && (
              <div
                className={`h-48 overflow-hidden relative group flex items-center justify-center p-8 transition-colors duration-300 ${
                  isDark ? "bg-[#1E293B]/30" : "bg-gray-50"
                }`}
              >
                <img
                  src={project.image?.default || project.image}
                  alt={project.projectName}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">View Project</p>
                </div>
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {project.projectName}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 flex-1 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.projectDesc}
              </p>

              {project.footerLink && (
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.footerLink.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        isDark
                          ? "bg-gray-700 text-gray-200 hover:bg-primary hover:text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {link.name.toLowerCase().includes("github") ? (
                        <GitFork size={16} />
                      ) : (
                        <ExternalLink size={16} />
                      )}
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
