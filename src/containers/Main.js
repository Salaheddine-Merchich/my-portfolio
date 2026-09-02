import React, {lazy, Suspense, useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import ScrollToTopButton from "./topbutton/Top";
import {
  splashScreen,
  blogSection,
  talkSection,
  twitterDetails,
  podcastSection
} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Skills = lazy(() => import("./skills/Skills"));
const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const Education = lazy(() => import("./education/Education"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Projects = lazy(() => import("./projects/Projects"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Resume = lazy(() => import("./resume/Resume"));
const Profile = lazy(() => import("./profile/Profile"));
const Footer = lazy(() => import("../components/footer/Footer"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Talks = lazy(() => import("./talks/Talks"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Podcast = lazy(() => import("./podcast/Podcast"));

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(splashScreen.enabled);

  useEffect(() => {
    if (!splashScreen.enabled) {
      setIsShowingSplashAnimation(false);
      return;
    }

    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      splashScreen.duration
    );
    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const changeTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={isDark ? "dark dark-mode" : ""}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <a href="#greeting" className="skip-link">Skip to content</a>
        {!isShowingSplashAnimation && (
          <main id="main-content">
            <Header />
            <Greeting />
            <Suspense fallback={null}>
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <StartupProject />
              <Projects />
              <Achievement />
              <Resume />
              {blogSection.display && <Blogs />}
              {talkSection.display && <Talks />}
              {twitterDetails.display && <Twitter />}
              {podcastSection.display && <Podcast />}
              <Profile />
              <Footer />
            </Suspense>
            <ScrollToTopButton />
          </main>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
