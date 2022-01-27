import React from "react";
import "../App.css";


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    // <!-- Navigation-->
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#page-top" ></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">  
                    <li className="nav-item"><a className="nav-link" href="#about"
              onClick={() => handlePageChange("About")}
              // This is a conditional (ternary) operator that checks to see if the current page is "About"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</a></li>
                    <li className="nav-item"><a
                    href="#portfolio"
                    onClick={() => handlePageChange("Portfolio")}
                    // Check to see if the currentPage is `About`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                    classNameName={
                      currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                    }
                  >
                    Portfolio
                  </a></li>
                    <li className="nav-item"><a
                    href="#experience"
                    onClick={() => handlePageChange("Experience")}
                    // Check to see if the currentPage is `Blog`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Experience" ? "nav-link active" : "nav-link"
                    }
                  >
                    Experience
                  </a></li>
                    <li className="nav-item"><a
                    href="#contact"
                    onClick={() => handlePageChange("Contact")}
                    // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </a></li>
                </ul>
            </div>
        </div>
    </nav>

  );
}

export default NavTabs;
