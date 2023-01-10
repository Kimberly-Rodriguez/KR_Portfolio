import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";
// import { validateEmail } from "../utils/helpers";
import emailjs from "@emailjs/browser";
import { SuccessModal } from "./successModal";
import { ErrorModal } from "./errorModal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [successModalShow, setSuccessModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const formState = { name, email, phone, message };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      if (
        e.target[0].value === "" ||
        e.target[1].value === "" ||
        e.target.value === ""
      ) {
        setErrorModalShow(true);
        return;
      } else {
        emailjs
          .send(
            "service_emsytnk",
            "template_n5ati2n",
            formState,
            "vBe1YkLGiyKNRnFxc"
          )
          .then(
            (result) => {
              console.log("Form submission successful!", result.text);
              setSuccessModalShow(true);
            },
            (error) => {
              console.log("CONTACT FORM FAILED", error.text);
            }
          );
      }
    }
  };

  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <h3 className="section-subheading text-muted">
              Thank you for stopping by and I am looking forwad to staying
              connected!
            </h3>
          </div>

          <form onSubmit={handleSubmit} id="contactForm">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <!-- Name input--> */}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Full Name *"
                    data-sb-validations="required"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0">
                  {/* <!-- Phone number input--> */}
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Submit success message-->
             */}
            <SuccessModal
              show={successModalShow}
              // onHide={() => {
              //   setSuccessModalShow(false);
              //   window.location.reload(false);
              // }}
            />

            {/* <!-- Submit error message-->
             */}

            <ErrorModal
              show={errorModalShow}
              // onHide={() => setErrorModalShow(false)}
            />

            {/* <!-- Submit Button--> */}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase "
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
