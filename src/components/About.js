import React from "react";
import "../App.css";
import headshot from "../images/2.jpeg";

export default function About() {
  return (
    <section className="page-section bg-light" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            Welcome to my portfolio
          </h2>
          <h3 className="section-subheading text-muted"></h3>
        </div>
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={headshot}
                alt="Kimberly's Headshot"
              />
              <h4>Kimberly Rodriguez</h4>
              <p className="text-muted">Software Engineer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.bit.ly/kmbrly-rdrgz"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.bit.ly/kr-github"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://twitter.com/KimRodriguezLA"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              I am a software engineer with knowledge of technologies like
              React, MySQL and JavaScript. (Please visit my portfolio section
              below for details or find me on github: at Kimberly-Rodriguez)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
