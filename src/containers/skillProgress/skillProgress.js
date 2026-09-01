import React, {useContext} from "react";
import FadeInView from "../../components/fadeIn/FadeInView";
import {useInView} from "../../hooks/useInView";
import {techStack} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function SkillProgressBar({percentage, delay, isDark}) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`h-3 w-full rounded-full overflow-hidden ${
        isDark ? "bg-gray-700" : "bg-gray-100"
      }`}
    >
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-[1500ms] ease-out"
        style={{
          width: isInView ? percentage : "0%",
          transitionDelay: `${delay * 0.1}s`
        }}
      />
    </div>
  );
}

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <FadeInView variant="left" className="flex-1 w-full">
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
                <SkillProgressBar
                  percentage={exp.progressPercentage}
                  delay={i}
                  isDark={isDark}
                />
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView variant="none" className="flex-1 hidden lg:block">
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500"></div>
            <img
              alt="Skills Visualization"
              src="/hero-illustration.svg"
              width="400"
              height="320"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
