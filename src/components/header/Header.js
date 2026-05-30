import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = educationInfo.display;

  return (
    <Headroom>
      <header
        className={`header transition-all duration-300 ${
          isDark ? "bg-[#171c28]/90" : "bg-white/90"
        } backdrop-blur-md border-b ${
          isDark ? "border-gray-800" : "border-gray-100"
        }`}
      >
        <a href="/" className="logo group">
          <span className="text-primary font-bold">&lt;</span>
          <span
            className={`logo-name group-hover:text-primary transition-colors ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {greeting.username.split(" ")[0]}
          </span>
          <span className="text-primary font-bold">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={`menu ${isDark ? "dark-menu" : ""}`}>
          <li>
            <a
              href="#greeting"
              className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Home
            </a>
          </li>
          {viewSkills && (
            <li>
              <a
                href="#skills"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                About
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a
                href="#education"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Education
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a
                href="#experience"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Experience
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a
                href="#projects"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Projects
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a
                href="#achievements"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Certificates
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a
                href="#blogs"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a
                href="#talks"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Talks
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a
                href={
                  require("../../containers/greeting/resume.pdf").default ||
                  require("../../containers/greeting/resume.pdf")
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Resume
              </a>
            </li>
          )}
          <li>
            <a
              href="#contact"
              className={`font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="flex items-center">
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
