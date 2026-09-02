import React, {useContext} from "react";
import FadeInView from "../../components/fadeIn/FadeInView";
import Button from "../../components/button/Button";
import {resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {ExternalLink} from "lucide-react";

const publicUrl = process.env.PUBLIC_URL || "";

function assetUrl(path) {
  return `${publicUrl}${path}`;
}

export default function Resume() {
  const {isDark} = useContext(StyleContext);

  if (!resumeSection.display) {
    return null;
  }

  const files = Object.values(resumeSection.files || {});

  return (
    <section
      className="py-20 px-6 max-w-6xl mx-auto scroll-mt-24"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {files.map((file, i) => {
          const viewHref = assetUrl(file.viewHref || file.href);
          const previewHref = assetUrl(file.previewHref);
          const pdfHref = assetUrl(file.href);

          return (
            <FadeInView
              key={file.shortLabel}
              delay={i * 0.1}
              className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50"
                  : "bg-white border border-gray-100 hover:border-primary/30"
              } backdrop-blur-sm flex flex-col gap-5`}
            >
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
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

              <a
                href={viewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-h-[280px] rounded-xl border border-gray-200 bg-white overflow-hidden shadow-inner hover:ring-2 hover:ring-primary/40 transition-all"
                aria-label={`${file.label} preview — open full screen`}
              >
                <img
                  src={previewHref}
                  alt={`${file.label} preview`}
                  className="w-full h-auto max-h-[min(520px,70vh)] object-contain object-top"
                  loading="eager"
                  decoding="async"
                />
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  text="Download PDF"
                  href={pdfHref}
                  download={file.download}
                  className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                />
                <a
                  href={viewHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-sm font-semibold hover:text-primary transition-colors ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <ExternalLink size={16} />
                  Open full screen
                </a>
              </div>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
}
