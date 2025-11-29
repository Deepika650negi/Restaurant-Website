import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-white py-5 mt-5">
    <div className="container px-3 text-center">
      
      {/* Brand */}
      <h2 className="fw-bold mb-3" style={{ color: "#8b2e2e" }}>
        Royal Spice
      </h2>

      {/* Social Icons */}
      <div className="mb-3">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 fs-4 hover-scale"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 fs-4 hover-scale"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2 fs-4 hover-scale"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>

      {/* Info */}
      <p className="mb-1 fw-semibold">
        © {new Date().getFullYear()} Royal Spice
      </p>
      <p className="small mb-3">
        Designed with care, served with taste <span className="text-danger">❤</span>
      </p>

      {/* Footer Links (React Router) */}
      <div>
        <Link to="/" className="text-white mx-2 small footer-link">
          Home
        </Link>
        <Link to="/menu" className="text-white mx-2 small footer-link">
          Menu
        </Link>
        <Link to="/about" className="text-white mx-2 small footer-link">
          About
        </Link>
        <Link to="/contact" className="text-white mx-2 small footer-link">
          Contact
        </Link>
        <Link to="/bookTable" className="text-white mx-2 small footer-link">
          Book Table
        </Link>
      </div>
    </div>

    {/* Extra CSS */}
    <style>
      {`
        .hover-scale:hover {
          transform: scale(1.15);
          transition: transform 0.3s;
        }
        .footer-link {
          transition: color 0.3s;
        }
        .footer-link:hover {
          text-decoration: underline;
          color: #ff6b6b;
        }
      `}
    </style>
  </footer>
);

export default Footer;
