import React, {useContext} from "react";
import {motion} from "framer-motion";
import {techStack} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="flex-1 w-full"
        >
          <h2
            className={`text-3xl lg:text-4xl font-bold mb-10 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Proficiency
          </h2>
          <div className="space-y-8">
            {techStack.experience.map((exp, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`font-semibold ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {exp.Stack}
                  </span>
                  <span className="text-primary font-bold">
                    {exp.progressPercentage}
                  </span>
                </div>
                <div
                  className={`h-3 w-full rounded-full overflow-hidden ${
                    isDark ? "bg-gray-700" : "bg-gray-100"
                  }`}
                >
                  <motion.div
                    initial={{width: 0}}
                    whileInView={{width: exp.progressPercentage}}
                    viewport={{once: true}}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut"
                    }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          whileInView={{opacity: 1, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.8}}
          className="flex-1 hidden lg:block"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500"></div>
            <img
              alt="Skills Visualization"
              src={
                require("../../assets/images/skills_viz.svg").default ||
                require("../../assets/images/skills_viz.svg")
              }
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
