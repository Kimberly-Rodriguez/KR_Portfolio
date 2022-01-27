import React from "react";
import "../App.css"; 
import headshot from "../images/2.jpeg"


export default function About() {
  return (
    // Team/About
         <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Welcome to my portfolio</h2>
                    <h3 class="section-subheading text-muted"></h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src={headshot} alt="Kimberly's Headshot" />
                            <h4>Kimberly Rodriguez</h4>
                            <p class="text-muted">Software Engineer</p>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.bit.ly/kmbrly-rdrgz"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://www.bit.ly/kr-github"><i class="fab fa-github"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="https://twitter.com/KimRodriguezLA"><i class="fab fa-twitter"></i></a>
                         
                          
                        </div>
                    </div>
                    <div class="col-lg-4">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">
                    I am a software engineer with MERN stack projet based experience </p>
            
          
                  <p>Thank you for stopping by and I am looking forwad to staying connected! </p></div>
                </div>
            </div>
        </section>
  )
}