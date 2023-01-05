import React from "react";
import "../App.css";
import remindHeadShot from "../images/remindApp.png";
import dragonfruitHeadShot from "../images/dragonfruitApp.png";
import parksmartHeadShot from "../images/parksmartApp.png";
import opportunityHeadShot from "../images/opportunityApp.png";
import techblogHeadShot from "../images/techblogApp.png";
import energydashboardHeadShot from "../images/energydashboardApp.png";

function Portfolio() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">
            Enjoy exploring my favorite projects!
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1 - Dragon Fruit */}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://dragon-fruit-app.herokuapp.com/"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={dragonfruitHeadShot}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">DragonFruit</div>
                <div className="portfolio-caption-subheading text-muted">
                  Google API search by restaurant
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 2 - Energy Dashboard*/}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://github.com/Kimberly-Rodriguez/Energy_Consumption_Dashboard"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={energydashboardHeadShot}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  Energy Dashboard
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  A meter level electric dashboard
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 3 - Park Smart */}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://github.com/Kimberly-Rodriguez/ParkSmart"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={parksmartHeadShot} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">ParkSmart</div>
                <div className="portfolio-caption-subheading text-muted">
                  public parking space finder
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
            {/* Portfolio item 4 - Opportunity */}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://github.com/Kimberly-Rodriguez/job-search/blob/main/assets/images/screenshot2.png"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src={opportunityHeadShot}
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Opportunity</div>
                <div className="portfolio-caption-subheading text-muted">
                  Search for nearby jobs
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Portfolio item 5 - Tech Blog*/}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://github.com/Kimberly-Rodriguez/TechBlog"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={techblogHeadShot} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">TechBlog</div>
                <div className="portfolio-caption-subheading text-muted">
                  community based application
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            {/* Portfolio item 6- Remind*/}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="https://github.com/Kimberly-Rodriguez/re_mind"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={remindHeadShot} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Re:mind</div>
                <div className="portfolio-caption-subheading text-muted">
                  selfcare/happiness tracker
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
