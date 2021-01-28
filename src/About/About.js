import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutDiv">
      {" "}
      <h2>About me:</h2>
      <div className="whoIAm">
        <div className="whoIamItem">
          <h3 className="whoIamItem">Who I am:</h3>
          <p className="aboutP">
            My name is Sawyer and I am born and raised in Portland Oregon. I
            spend my free time rock climbing, exploring the Pacific North West,
            or working with tech!
            <br />
            <br />
            My passion for web development stems from my love of finding
            solutions. A lot of my hobbies have this in common ranging from
            board games and rock climbing. I also enjoy the flexibility that
            programming provides. Whether in a team or independently,
            programming is something that I look forward to.
          </p>
        </div>
        <img
          src="/images/PersonalSiteHead500.jpg"
          alt="onRock"
          className="whoIamRock"
        />
      </div>
      <div className="experience">
        <div className="whoIAmItem">
          <h3>Experience:</h3>

          <p className="aboutP">
            <b>Bloc:</b>
            <br />I have completed the Fullstack Frontend Development Course
            offered by Bloc. During this course, I gained hundreds of hours of
            both independent and team programming. Solving programming requests
            with modern technologies in both Frontend and Backend development
            and
          </p>
          <p className="aboutP">
            <b>The Circuit Bouldering Gym:</b>
            <br />
            For two years I worked both in the customer service department as
            well as a role in quality assurance.
            <br /> It was my responsibility at The Circuit to ensure that
            customers were satisfied during their time in our facility.
            <br />
            <br />
            Responsibilities:
            <ul>
              <li>
                Quality assurance through creating a safe desirable product for
                customers.
              </li>
              <li>Consistently adapt in a quick productive atmosphere.</li>
              <li>
                Meeting and setting deadlines for myself and others in the
                quality assuance team.
              </li>
            </ul>
          </p>
          <p className="aboutP">
            <b>Portland Parks and Recreation:</b>
            <br />
            Before I worked at the Circuit, I worked for 2 years with Portland
            Parks and Recreation as a Group Lead.
            <br /> I was in charge of a group of teens both educating them on
            nature and ensuring their safety.
            <br />
            <br />
            Responsibilities:
            <ul>
              <li>Developed and maintained strict schedules.</li>
              <li>Maintain a positive and welcoming outlook.</li>
              <li>Delagation of tasks for both coworkers and group members.</li>
            </ul>
          </p>
        </div>
        <img
          src="/images/PersonalSiteOnRock500.jpg"
          alt="onRock"
          className="whoIamRock"
        />
      </div>
      <div className="Skills">
        <div className="whoIAmItem">
          <h3>Skills:</h3>
          <p>Technologies</p>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Express</li>
            <li>HTML</li>
            <li>Vanilla CSS</li>
            <li>Unit Testing for Frontend and Backend applications</li>
            <li>
              Creating and maintaining RESTful APIs that support CRUD operations
            </li>
            <li>Javascript</li>
          </ul>
        </div>
        <img
          src="/images/PersonalSite500.jpg"
          alt="onRock"
          className="whoIamRock"
        />
      </div>
    </div>
  );
}

export default About;
