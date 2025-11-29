import React, { useState, useEffect } from "react";
import { Calendar, Clock, User, Phone, Mail, UsersRound, MapPin } from "lucide-react";

const BookTable = () => {
  const [msg, setMsg] = useState("");
  const [recentBookings, setRecentBookings] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
  });

  // Load bookings from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setRecentBookings(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      ...formData,
      id: Date.now(),
    };

    // Save to LocalStorage
    const updatedBookings = [newBooking, ...recentBookings];
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setRecentBookings(updatedBookings);

    setMsg(
      `Thank you ${formData.name}! Your table for ${formData.guests} people on ${formData.date} at ${formData.time} is booked.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
    });
  };

  return (
    <>
      {/* HERO IMAGE */}
      <div
        style={{
          height: "45vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <div
          className="h-100 d-flex justify-content-center align-items-center text-white text-center"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="fade-up">
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
                letterSpacing: "2px",
              }}
            >
              Book Your Table
            </h1>
            <p className="mt-2 fs-5">Reserve your dining experience now</p>
          </div>
        </div>
      </div>

      {/* MAIN FORM CARD */}
      <div className="container my-5">
        <div
          className="p-4 shadow-lg mx-auto"
          style={{
            maxWidth: "600px",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.3)",
            animation: "fadeUp 0.9s",
          }}
        >
          <h2 className="text-center mb-4" style={{ color: "#8b2e2e" }}>
            Reserve a Table
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="input-group mb-3">
              <span className="input-group-text bg-light">
                <User size={20} color="#8b2e2e" />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email */}
            <div className="input-group mb-3">
              <span className="input-group-text bg-light">
                <Mail size={20} color="#8b2e2e" />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone */}
            <div className="input-group mb-3">
              <span className="input-group-text bg-light">
                <Phone size={20} color="#8b2e2e" />
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Date & Time */}
            <div className="row mb-3">
              <div className="col-6">
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <Calendar size={20} color="#8b2e2e" />
                  </span>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <Clock size={20} color="#8b2e2e" />
                  </span>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div className="input-group mb-3">
              <span className="input-group-text bg-light">
                <UsersRound size={20} color="#8b2e2e" />
              </span>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="form-control"
                placeholder="Guests"
                min="1"
                required
              />
            </div>

            <button
              className="btn w-100 mt-2"
              style={{
                background: "#8b2e2e",
                color: "white",
                padding: "12px",
                borderRadius: "50px",
                fontWeight: "600",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#a63a3a")}
              onMouseOut={(e) => (e.target.style.background = "#8b2e2e")}
            >
              Book Table
            </button>
          </form>

          {msg && <div className="alert alert-success mt-3">{msg}</div>}
        </div>
      </div>

      {/* RECENT BOOKINGS SECTION */}
      {recentBookings.length > 0 && (
        <div className="container my-4">
          <h3 style={{ color: "#8b2e2e" }}>Your Recent Bookings</h3>

          <div className="row">
            {recentBookings.map((b) => (
              <div className="col-md-4 col-sm-6 mt-3" key={b.id}>
                <div
                  className="p-3 shadow-sm rounded"
                  style={{
                    background: "#fff5f5",
                    borderLeft: "4px solid #8b2e2e",
                  }}
                >
                  <h6 className="mb-1" style={{ color: "#8b2e2e" }}>
                    {b.name}
                  </h6>
                  <p className="m-0">
                    <MapPin size={15} color="#8b2e2e" /> {b.date} at {b.time}
                  </p>
                  <small>{b.guests} Guests</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BookTable;
