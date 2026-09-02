import React, {useContext} from "react";
import FadeInView from "../../components/fadeIn/FadeInView";
import Button from "../../components/button/Button";
import {resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {FileText, Download} from "lucide-react";

export default function Resume() {
  const {isDark} = useContext(StyleContext);

  if (!resumeSection.display) {
    return null;
  }

  const files = Object.values(resumeSection.files || {});

  return (
    <section
      className="py-20 px-6 max-w-5xl mx-auto"
      id="resume"
      aria-labelledby="resume-heading"
    >
      <FadeInView className="text-center mb-12">
        <h2
          id="resume-heading"
          className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {resumeSection.title}
        </h2>
        <p
          className={`text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {resumeSection.subtitle}
        </p>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {files.map((file, i) => (
          <FadeInView
            key={file.shortLabel}
            delay={i * 0.1}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50"
                : "bg-white border border-gray-100 hover:border-primary/30"
            } backdrop-blur-sm flex flex-col items-center text-center gap-4`}
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                isDark ? "bg-primary/20" : "bg-primary/10"
              }`}
            >
              <FileText size={32} className="text-primary" />
            </div>
            <div>
              <p
                className={`text-xs font-bold uppercase tracking-widest text-primary mb-1`}
              >
                {file.shortLabel}
              </p>
              <h3
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {file.label}
              </h3>
            </div>
            <Button
              text="Download PDF"
              href={file.href}
              download={file.download}
              className="w-full flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
            />
            <a
              href={file.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <Download size={14} />
              View in browser
            </a>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
