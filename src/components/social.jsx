import React from "react";
import xLogo from "../assets/images/logo-x.svg";
import githubLogo from "../assets/images/logo-github.svg";
import linkedinLogo from "../assets/images/logo-linkedin.svg";
import frontendMentorLogo from "../assets/images/logo-frontend-mentor.svg";

const Social = () => {
  return (
    <div className="social-buttons">
      <button className="icon">
        <img src={xLogo} alt="X" />
      </button>
      <button className="icon">
        <img src={githubLogo} alt="Github" />
      </button>
      <button className="icon">
        <img src={linkedinLogo} alt="LinkedIn" />
      </button>
      <button className="icon">
        <img src={frontendMentorLogo} alt="Frontend Mentor" />
      </button>
    </div>
  );
};

export default Social;
