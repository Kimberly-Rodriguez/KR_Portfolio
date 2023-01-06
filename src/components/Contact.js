import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = { name, email, phone, message };
    // console.log(messages);

    //   try {
    //     const response = await fetch(`${}`, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       credentials: "include",
    //       body: JSON.stringify(
    //        messages
    //       ),
    //     });
    //     const content = await response.json();
    //     console.log('success')
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
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
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            {/* <!-- Submit error message-->
             */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
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
      {/* <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{message}</p> */}
      <Footer />
    </div>
  );
}
