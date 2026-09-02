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

  const closeMobileMenu = () => {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn) {
      menuBtn.checked = false;
    }
  };

  const navLinkClass = isDark
    ? "font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors text-white"
    : "font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors text-gray-900";

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
            {greeting.username}
          </span>
          <span className="text-primary font-bold">/&gt;</span>
        </a>
        <div className="header-actions">
          <ToggleSwitch />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="sr-only">Open navigation menu</span>
            <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
          </label>
        </div>
        <nav aria-label="Main navigation">
        <ul className={`menu ${isDark ? "dark-menu" : ""}`}>
          <li>
            <a href="#greeting" onClick={closeMobileMenu} className={navLinkClass}>
              Home
            </a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMobileMenu} className={navLinkClass}>
                About
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={closeMobileMenu} className={navLinkClass}>
                Education
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMobileMenu} className={navLinkClass}>
                Experience
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#projects" onClick={closeMobileMenu} className={navLinkClass}>
                Projects
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={closeMobileMenu} className={navLinkClass}>
                Certificates
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={closeMobileMenu} className={navLinkClass}>
                Blogs
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={closeMobileMenu} className={navLinkClass}>
                Talks
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={closeMobileMenu} className={navLinkClass}>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={closeMobileMenu} className={navLinkClass}>
              Contact
            </a>
          </li>
        </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
