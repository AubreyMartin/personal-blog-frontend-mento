import React from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import avatarImg from "../assets/images/image-avatar.jpg";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar__avatar">
        <img src={avatarImg} alt="avatar" />
      </div>

      <div className="navbar__item">
        <button className="navbar__link" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <div className="navbar__item">
        <button className="navbar__link" onClick={() => navigate("/blog")}>
          Blog
        </button>
      </div>
      <div className="navbar__item">
        <button className="navbar__link" onClick={() => navigate("/about")}>
          About
        </button>
      </div>
      <div className="navbar__item">
        <button
          className="navbar__link"
          onClick={() => navigate("/newsletter")}
        >
          Newsletter
        </button>
      </div>
      <div className="navbar__item">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
