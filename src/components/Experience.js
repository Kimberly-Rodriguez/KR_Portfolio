import React from "react";
import "../App.css";

export default function Experience() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Experience</h2>
          <h3 className="section-subheading text-muted">
            Please feel free to download my most up-to-date resume (below) for
            details.
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/1.jpg"
                alt="..."
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
                src="assets/img/about/2.jpg"
                alt="..."
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
          <li>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/3.jpg"
                alt="..."
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
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src="assets/img/about/4.jpg"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2013 - 2017</h4>
                <h4 className="subheading">
                  Data Programs Lead | City of Los Angeles{" "}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                <br />
                Download
                <br />
                Resume
                <br />
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
