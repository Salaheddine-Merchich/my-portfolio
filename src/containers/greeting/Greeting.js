import React, {useContext} from "react";
import {motion} from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="greet-main px-6 py-10 lg:py-20 max-w-7xl mx-auto"
      id="greeting"
    >
      <div className="greeting-main flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="greeting-text-div flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className={`text-4xl lg:text-6xl font-bold mb-6 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {greeting.title}{" "}
              <span className="inline-block animate-wave">{emoji("👋")}</span>
            </h1>
            <p className={`text-lg lg:text-xl leading-relaxed mb-8 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {greeting.subTitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
               <SocialMedia />
            </div>
            <div className="button-greeting-div flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
              <Button 
                text="Contact me" 
                href="#contact" 
                className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50" 
              />
              {greeting.resumeLink && (
                <Button
                  text="Download CV"
                  href={greeting.resumeLink === "#" ? "#" : require("./resume.pdf")}
                  download="Salaheddine_Merchich_Resume.pdf"
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                />
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="greeting-image-div flex-1 max-w-md lg:max-w-none w-full"
        >
          {illustration.animated ? (
            <div className="relative group">
               <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500 animate-pulse"></div>
               <DisplayLottie animationData={landingPerson} />
            </div>
          ) : (
            <div className="relative group">
               <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full -z-10 group-hover:bg-primary/30 transition-all duration-500"></div>
               <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg").default || require("../../assets/images/manOnTable.svg")}
                className="w-full h-auto drop-shadow-2xl transform group-hover:rotate-1 transition-transform duration-500"
              />
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
