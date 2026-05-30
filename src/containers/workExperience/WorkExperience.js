import React, {useContext} from "react";
import {motion} from "framer-motion";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Calendar, CircleCheck} from "lucide-react";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          Professional Experience
        </h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          My journey in the software engineering world.
        </p>
      </motion.div>

      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-12 space-y-12">
        {workExperiences.experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-sm" />
            
            <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
              isDark 
                ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50" 
                : "bg-white border border-gray-100 hover:border-primary/30"
            } backdrop-blur-sm`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div className="flex items-center gap-4">
                  {exp.companylogo && (
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden shrink-0 shadow-md border border-gray-100">
                      <img 
                        src={exp.companylogo?.default || exp.companylogo} 
                        alt={exp.company}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full ${
                  isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                }`}>
                  <Calendar size={16} />
                  {exp.date}
                </div>
              </div>

              <p className={`mb-6 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {exp.desc}
              </p>

              {exp.descBullets && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.descBullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CircleCheck size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
