import React, { useState } from "react";
import {
  GeoAltFill,
  TelephoneFill,
  EnvelopeFill,
  ClockFill,
  SendFill,
} from "react-bootstrap-icons";

const Contact = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("Your message has been successfully submitted. Thank you ✨");
    e.target.reset();
  };

  return (
    <div className="contact-page container py-5">
      {/* PAGE TITLE */}
      <h2 className="text-center fw-bold mb-5 fade-in">
        Contact <span className="text-danger">Us</span>
      </h2>

      <div className="row g-4">
        {/* CONTACT INFO LEFT CARD */}
        <div className="col-lg-5">
          <div className="info-card p-4 shadow-lg rounded-4 fade-left">
            <h4 className="fw-bold mb-4">Get in Touch</h4>

            <p className="d-flex align-items-center mb-3 contact-item">
              <GeoAltFill className="me-3 text-danger fs-4" />
              123, Gandhi Nagar, New Delhi - 110001
            </p>

            <p className="d-flex align-items-center mb-3 contact-item">
              <TelephoneFill className="me-3 text-success fs-4" />
              +91 98xxxxxx
            </p>

            <p className="d-flex align-items-center mb-3 contact-item">
              <EnvelopeFill className="me-3 text-primary fs-4" />
              info@royalspice.com
            </p>

            <p className="d-flex align-items-center mb-3 contact-item">
              <ClockFill className="me-3 text-warning fs-4" />
              Mon – Sun: 10:00 AM – 11:00 PM
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-icons mt-4 d-flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-3 text-primary hover-float"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
              >
                <i className="bi bi-instagram fs-3 text-danger hover-float"></i>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-3"
              >
                <i className="bi bi-whatsapp fs-3 text-success hover-float"></i>
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="col-lg-7">
          <div className="card contact-form-card p-4 shadow-lg rounded-4 fade-right">
            <h4 className="fw-bold mb-3">Send Us a Message</h4>

            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-3 rounded-pill"
                placeholder="Your Name"
                required
              />

              <input
                className="form-control mb-3 rounded-pill"
                type="email"
                placeholder="Your Email"
                required
              />

              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>

              <button className="btn btn-danger w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 send-btn">
                Send <SendFill />
              </button>
            </form>

            {msg && <div className="alert alert-success mt-3">{msg}</div>}
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="mt-5">
        <h4 className="fw-bold mb-3 fade-in text-center">Find Us on Map</h4>
        <div className="map-container rounded-4 shadow-lg overflow-hidden fade-up">
          <iframe
            title="map"
            width="100%"
            height="330"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.501618828516!2d77.2289183150837!3d28.613939982421364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36f2c760f7%3A0x3b8b5c49a455d835!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1705400000000!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
