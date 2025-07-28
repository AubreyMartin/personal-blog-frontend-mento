import React, { useState } from "react";
import sunImg from "../assets/images/icon-sun.svg";
import moonImg from "../assets/images/icon-moon.svg";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    // You can add logic here to actually change the theme
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark/light mode"
    >
      {darkMode ? (
        <span role="img" aria-label="Moon">
          <img src={moonImg} alt="Moon" />
        </span>
      ) : (
        <span role="img" aria-label="Sun">
          <img src={sunImg} alt="Sun" />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
