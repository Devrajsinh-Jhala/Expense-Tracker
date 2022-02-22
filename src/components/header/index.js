import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">Tracxpense.</div>
        <div className="header-button">
          <a
            href="https://github.com/Devrajsinh-Jhala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original colored"></i>Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
