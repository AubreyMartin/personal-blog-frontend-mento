import React from "react";
import { useTheme } from "../context/ThemeContext";
import sunImg from "../assets/images/icon-sun.svg";
import moonImg from "../assets/images/icon-moon.svg";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark/light mode"
    >
      {isDarkMode ? (
        <img src={sunImg} alt="Switch to light mode" />
      ) : (
        <img src={moonImg} alt="Switch to dark mode" />
      )}
    </button>
  );
};

export default ThemeToggle;
