import React, {useContext} from "react";
import {motion} from "framer-motion";
import {achievementSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {Award, ExternalLink} from "lucide-react";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
          {achievementSection.title}
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {achievementSection.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementSection.achievementsCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${
              isDark 
                ? "bg-gray-800/50 border border-gray-700 hover:border-primary/50" 
                : "bg-white border border-gray-100 hover:border-primary/30"
            } backdrop-blur-sm flex flex-col`}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden mb-6 shadow-md border border-gray-100">
              {card.image ? (
                <img 
                  src={card.image?.default || card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <Award size={32} className="text-primary" />
              )}
            </div>
            
            <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
              {card.title}
            </h3>
            <p className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {card.subtitle}
            </p>
            
            {card.footerLink && (
              <div className="flex flex-wrap gap-3 mt-auto">
                {card.footerLink.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                  >
                    <ExternalLink size={14} />
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
