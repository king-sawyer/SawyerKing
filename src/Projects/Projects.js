import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projectsDiv">
      <div className="project">
        <div className="textAndImage">
          <div className="text">
            <h3>Pegasus Games</h3>
            <p>
              This project is a site created for a board game company named
              Pegasus Games to learn information on their store and see what
              products they have available. The frontend code for this project
              was created using React while the backend was created using
              Express.
              <br />
              Technologies:
              <ul>
                <li class="projectLi">React</li>
                <li class="projectLi">Express</li>
                <li class="projectLi">Vanilla CSS</li>
                <li class="projectLi">PSQL</li>
                <li class="projectLi">Heroku</li>
                <li class="projectLi">Vercel</li>
              </ul>
            </p>
            <a
              href="https://pegasus-games-i2094yfug.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Here is a link to the live site.{" "}
            </a>
            <br />
            <a
              href="https://github.com/king-sawyer/Pegasus-Games"
              target="_blank"
              rel="noreferrer"
            >
              Here is a link to the frontend repo.{" "}
            </a>
            <br />
            <a
              href="https://github.com/king-sawyer/pegasus-games-backend"
              target="_blank"
              rel="noreferrer"
            >
              Here is a link to the backend repo.{" "}
            </a>
          </div>

          <img
            className="projectImage"
            src="/images/PegaGame.png"
            alt="firstProject"
          />
        </div>
      </div>
      <div className="project">
        {" "}
        <div className="textAndImage">
          <div className="text">
            <h3>Brandanowitzz Portfolio Shop</h3>
            <p>
              This project is an ecommerce/personal shop for a local Portland
              artist named Brandanowitzz. This project is a Fullstack
              application that utelizes React on the frontend and Express on the
              backend. Technologies:
              <ul>
                <li class="projectLi">React</li>
                <li class="projectLi">Express</li>
                <li class="projectLi">
                  Stript to handle custom purchases between the artist and
                  customers.
                </li>
                <li class="projectLi">Vanilla CSS</li>
                <li class="projectLi">PSQL</li>
                <li class="projectLi">Heroku</li>
                <li class="projectLi">Vercel</li>
              </ul>
              <a
                href="https://second-capstone.king-sawyer.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Here is a link to the live site.{" "}
              </a>
              <br />
              <a
                href="https://github.com/king-sawyer/Art-Portfolio-Frontend"
                target="_blank"
                rel="noreferrer"
              >
                Here is a link to the frontend repo.{" "}
              </a>
              <br />
              <a
                href="https://github.com/king-sawyer/Art-Portfolio-Backend"
                target="_blank"
                rel="noreferrer"
              >
                Here is a link to the backend repo.{" "}
              </a>
              <br />
            </p>
          </div>

          <img
            className="projectImage"
            src="/images/Site.png"
            alt="secondProject"
          />
        </div>
      </div>
      <div className="project">
        {" "}
        <div className="textAndImage">
          <div className="text">
            <h3>Charity Finder</h3>
            <p>
              This project allows users to search for charities to research
              based on different search parameters. This project uses HTML, CSS,
              Javascript, and jQuery. The project searches through different
              third party API's to return desired results and also charities
              based on the users current geo location.
              <ul>
                <li class="projectLi">React</li>
                <li class="projectLi">Express</li>
                <li class="projectLi">
                  Stript to handle custom purchases between the artist and
                  customers.
                </li>
                <li class="projectLi">Vanilla CSS</li>
                <li class="projectLi">PSQL</li>
                <li class="projectLi">Heroku</li>
                <li class="projectLi">Vercel</li>
              </ul>
              <a
                href="https://king-sawyer.github.io/CharityNavigator/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Here is a link to the live site.{" "}
              </a>
              <br />
              <a
                href="https://king-sawyer.github.io/CharityNavigator/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Here is a link to the github repo.{" "}
              </a>
            </p>
          </div>
          <img
            className="projectImage"
            src="/images/CharityFinderSmall.png"
            alt="thirdProject"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
