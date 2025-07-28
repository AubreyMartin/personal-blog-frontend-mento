import React from "react";
import xLogo from "../assets/images/logo-x.svg";
import githubLogo from "../assets/images/logo-github.svg";
import linkedinLogo from "../assets/images/logo-linkedin.svg";
import frontendMentorLogo from "../assets/images/logo-frontend-mentor.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer__text">Made with ❤️ and ☕️</span>
      <div className="footer__social">
        <a href="#" className="footer__icon" aria-label="X">
          <img src={xLogo} alt="X" />
        </a>
        <a href="#" className="footer__icon" aria-label="Github">
          <img src={githubLogo} alt="Github" />
        </a>
        <a href="#" className="footer__icon" aria-label="LinkedIn">
          <img src={linkedinLogo} alt=" LinkedIn" />
        </a>
        <a href="#" className="footer__icon" aria-label="Frontend Mentor">
          <img src={frontendMentorLogo} alt="Frontend Mentor" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
