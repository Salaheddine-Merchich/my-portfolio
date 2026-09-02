import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  const handleWrapClick = event => {
    if (event.target === event.currentTarget) {
      changeTheme();
    }
  };

  return (
    <div className="toggle-switch-wrap" onClick={handleWrapClick}>
      <label className="switch">
        <input
          type="checkbox"
          checked={isDark}
          aria-label="Toggle dark mode"
          onChange={changeTheme}
        />
        <span className="slider round">
          <span className="emoji">{isDark ? emoji("🌜") : emoji("☀️")}</span>
        </span>
      </label>
    </div>
  );
};
export default ToggleSwitch;
