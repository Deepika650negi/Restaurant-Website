import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  const links = [
    { name: "HOME", path: "/" },
    { name: "MENU", path: "/menu" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Colors
  const activeColor = "#FFD2B8";
  const normalColor = "#FFF0E6";

  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg sticky-top w-100 m-0 p-0"
      style={{
        background: "#5A1E1E",
        borderBottom: "2px solid rgba(255, 240, 230, 0.1)",
      }}
    >
      <div className="container-fluid px-3">

        {/* BRAND */}
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
          style={{
            color: "#FFF0E6",
            letterSpacing: "1px",
            fontFamily: "'Playfair Display', serif",
            textShadow: "0px 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          Royal Spice
        </Link>

        {/* TOGGLE */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        {/* NAV ITEMS */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            {links.map((item) => (
              <li className="nav-item" key={item.name}>
                <Link
                  to={item.path}
                  className="nav-link btn position-relative"
                  onClick={() => setOpen(false)}
                  style={{
                    color:
                      currentPath === item.path ? activeColor : normalColor,
                    fontWeight: 600,
                    padding: "8px 18px",
                    transition: "0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#FFD2B8";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color =
                      currentPath === item.path ? activeColor : normalColor;
                  }}
                >
                  {item.name}

                  <span
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: "2px",
                      transform: "translateX(-50%)",
                      height: "2px",
                      width: currentPath === item.path ? "60%" : "0%",
                      background: "#FFD2B8",
                      transition: "0.3s ease",
                    }}
                  ></span>
                </Link>
              </li>
            ))}

            {/* BOOK TABLE BUTTON */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link
                to="/bookTable"
                onClick={() => setOpen(false)}
                className="btn fw-bold px-4 py-2"
                style={{
                  background: "#B05252",
                  color: "#FFF0E6",
                  borderRadius: 50,
                  boxShadow: "0 4px 14px rgba(176, 82, 82, 0.4)",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "#8B3B3B";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#B05252";
                }}
              >
                Book a Table
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
