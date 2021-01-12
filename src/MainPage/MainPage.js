import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainPageDiv">
      {" "}
      <div class="mainGreeting">
        <h1 className="titleh1"> Hi, I'm Sawyer </h1>
        <h3 className="titleh3">
          {" "}
          I am a software developer from Portland, Oregon{" "}
        </h3>
        <div>
          <Link to="/about">
            <div className="learnMore">
              <p>Learn More</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
