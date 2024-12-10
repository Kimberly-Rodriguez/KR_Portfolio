import React from "react";
import "../App.css";

import javascriptSymbol from "../images/javascriptLogo.png";
import reactSymbol from "../images/reactLogo.png";
import htmlLogo from "../images/htmlLogo.png";

import sqlLogo from "../images/sqlLogo.png";

export default function Experience() {
  return (
    <section className="page-section" id="experience">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Experience</h2>
          <h3 className="section-subheading text-muted">
            To learn more about my work experience and education please feel
            free to view my most up-to-date resume below. Thank you!
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={reactSymbol}
                alt="origami like bird"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2021 - Present</h4>
                <h4 className="subheading"> Full Stack Engineer | innowatts</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Built and styled a system that alerted users when they reached
                  a set limit of metrics capacity. The check was both in the
                  frontend and backend. When the limit is reached the user is
                  prompted with three options and prevented from creating
                  further metrics
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={javascriptSymbol}
                alt="origami like heart"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2021 - Present</h4>
                <h4 className="subheading">
                  Teaching Assistant | Full Stack Web Development | University
                  of Minnesota
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Teach and facilitate the fundamentals of programming via the
                  online delivery of a modern, full-stack web development
                  curriculum(HTML, CSS, ES6+, SQL, MongoDB, RESTful APIs, PWAs,
                  React, GraphQL).
                </p>
              </div>
            </div>
          </li>
          {/* <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-center"
                src={htmlLogo}
                alt="origami like butterfly"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2017 - 2021</h4>
                <h4 className="subheading">Software Engineer | TechTinx</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Redesigned organization’s website from jQuery to React
                  improving user-experience and modernizing overall design.
                </p>
              </div>
            </div>
          </li> */}
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={sqlLogo}
                alt="origami like big bird"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2013 - 2022</h4>
                <h4 className="subheading">
                  Data Programs Lead | City of Los Angeles{" "}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Launched the Open Data Literacy Program which empowered
                  neighborhoods through open data tools in topics like public
                  safety and transportation.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                <a href="https://drive.google.com/file/d/1yl7Ttky1EwNSlwRQ4jVdh9bcubHPtmdl/view?usp=sharing">
                  <br />
                  View
                  <br />
                  Resume
                  <br />
                </a>
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
