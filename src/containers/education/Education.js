import React, {useContext} from "react";
import {motion} from "framer-motion";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {GraduationCap, Calendar} from "lucide-react";

export default function Education() {
  const {isDark} = useContext(StyleContext);
  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto" id="education">
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
          Education
        </h1>
        <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          My academic background and qualifications.
        </p>
      </motion.div>

      <div className="space-y-8">
        {educationInfo.schools.map((school, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: i * 0.1}}
            className={`p-8 rounded-3xl shadow-xl transition-all duration-300 ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50"
                : "bg-white border border-gray-100 hover:border-primary/30"
            } backdrop-blur-sm`}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden shrink-0 shadow-lg border border-gray-100">
                {school.logo ? (
                  <img
                    src={school.logo?.default || school.logo}
                    alt={school.schoolName}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <GraduationCap size={48} className="text-primary" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {school.schoolName}
                  </h3>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full ${
                      isDark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Calendar size={16} />
                    {school.duration}
                  </div>
                </div>

                <h4 className="text-primary font-bold text-lg mb-4 flex items-center gap-2">
                  {school.subHeader}
                </h4>

                <p
                  className={`mb-4 leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {school.desc}
                </p>

                {school.descBullets && (
                  <ul className="space-y-2">
                    {school.descBullets.map((bullet, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
