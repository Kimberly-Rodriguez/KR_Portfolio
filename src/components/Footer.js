import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">
            Copyright &copy; Kimberly Rodriguez 2022
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
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
          <div className="col-lg-4 text-lg-end">
            <a className="link-dark text-decoration-none me-3" href="about">
              Back to the top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
