import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const Home = () => {
  const navigate = useNavigate();

  const images = [
    "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?cs=srgb&dl=blur-close-up-cutlery-370984.jpg&fm=jpg",
    "https://wallpapercave.com/wp/wp1874184.jpg",
    "https://img.freepik.com/premium-photo/restaurant-food-hd-8k-wallpaper-stock-photographic-image_853645-55054.jpg?w=2000",
    "https://img.freepik.com/premium-photo/chef-cooking-restaurant_835197-3938.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(autoSlide);
  }, [images.length]);

  return (
    <section>
      {/* HERO SLIDER */}
      <div className="position-relative w-100 overflow-hidden" style={{ height: "70vh" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-100 h-100 position-absolute"
            style={{
              objectFit: "cover",
              transition: "opacity 1s ease-in-out",
              opacity: currentIndex === index ? 1 : 0,
              top: 0,
              left: 0,
            }}
          />
        ))}

        {/* CONTENT OVERLAY */}
        <div
          className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3"
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
        >
          <h1 className="display-4 fw-bold">Royal Spice</h1>
          <p className="lead mb-3">
            Where tradition meets taste — an unforgettable dining experience.
          </p>

          {/* FIXED BUTTON */}
          <button
            className="btn fw-bold px-4 py-2 rounded-pill"
            style={{
              background: "#B05252",
              color: "#FFF0E6",
              border: "2px solid #B05252",
              transition: "0.3s",
            }}
            onClick={() => navigate("/menu")} 
            onMouseOver={(e) => (e.currentTarget.style.background = "#8B3B3B")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#B05252")}
          >
            View Menu
          </button>
        </div>

        {/* DOTS */}
        <div className="position-absolute w-100 d-flex justify-content-center" style={{ bottom: "20px" }}>
          <div className="d-flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  background: currentIndex === index ? "#8B3B3B" : "#ffffff88",
                  transition: "0.3s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
