import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerDiv">
      <ul class="headerUl">
        <li>
          <Link to="/" className="headerLi">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="/about" className="headerLi">
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="headerLi">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="headerLi">
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
