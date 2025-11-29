import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const galleryImages = [
  "https://wallpaperaccess.com/full/767054.jpg",
  "https://www.tastingtable.com/img/gallery/amplify-your-summertime-iced-coffee-with-pineapple-juice/intro-1689799371.jpg",
  "https://cdn.pixabay.com/photo/2015/11/02/10/10/restaurant-1018213_1280.jpg",
  "https://tse4.mm.bing.net/th/id/OIP.2mGppmx9cve8aBbt9TZzNwHaE8?pid=Api&P=0&h=220",
  "https://www.honeymoonbug.com/blog/wp-content/uploads/2022/10/Thukpa.jpg",
  "https://thumbs.dreamstime.com/b/iced-cappuccino-coffee-shop-cafe-restaurant-209948060.jpg",
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero d-flex align-items-center justify-content-center">
        <div className="text-center hero-content">
          <h1 className="display-4 fw-bold fade-in">Welcome to Our Restaurant</h1>
          <p className="lead fade-in-delay">
            Serving love, tradition & unforgettable taste since 2010.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=600"
              alt="Restaurant"
              className="img-fluid rounded shadow story-img slide-left"
            />
          </div>

          <div className="col-md-6 slide-right">
            <h2 className="fw-bold text-success mb-3">Our Story</h2>
            <p className="text-muted">
              Since 2010, we have been crafting delicious food using fresh ingredients,
              authentic spices, and traditional Indian cooking.
            </p>
            <p className="text-muted">
              Our mission is to deliver a memorable dining experience with perfect taste & hygiene.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Why People Love Us</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="feature-card shadow-sm hover-scale fade-up">
                <i className="bi bi-award text-success fs-1"></i>
                <h5 className="mt-2">Premium Quality</h5>
                <p className="text-muted small">Handpicked ingredients cooked with perfection.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card shadow-sm hover-scale fade-up delay-1">
                <i className="bi bi-heart-fill text-danger fs-1"></i>
                <h5 className="mt-2">Loved by Customers</h5>
                <p className="text-muted small">Over 10,000+ happy customers.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card shadow-sm hover-scale fade-up delay-2">
                <i className="bi bi-bag-check-fill text-primary fs-1"></i>
                <h5 className="mt-2">Hygienic Kitchen</h5>
                <p className="text-muted small">100% hygiene & food safety ensured.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card shadow-sm hover-scale fade-up delay-3">
                <i className="bi bi-truck text-warning fs-1"></i>
                <h5 className="mt-2">Fast Delivery</h5>
                <p className="text-muted small">Hot food delivered to your home quickly.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">What Our Customers Say</h2>

          <div className="testimonial-carousel">
            <div className="testimonial-card shadow-sm fade-up">
              <p className="text-muted">“Amazing food and excellent service!”</p>
              <h6 className="fw-bold mt-2">– Priya Sharma</h6>
            </div>

            <div className="testimonial-card shadow-sm fade-up delay-1">
              <p className="text-muted">
                “The best Indian cuisine in town. Fresh and tasty every time.”
              </p>
              <h6 className="fw-bold mt-2">– Rohan Gupta</h6>
            </div>

            <div className="testimonial-card shadow-sm fade-up delay-2">
              <p className="text-muted">“Lovely ambiance and premium quality food.”</p>
              <h6 className="fw-bold mt-2">– Anjali Verma</h6>
            </div>
          </div>
        </div>
      </section>

      {/* CHEF TEAM */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-success mb-4">Meet Our Chefs</h2>

          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="chef-card shadow-sm hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?w=300"
                  className="img-fluid rounded-circle mb-2"
                  alt="Chef 1"
                />
                <h6 className="fw-bold">Chef Arjun</h6>
                <small className="text-muted">Head Chef</small>
              </div>
            </div>

            <div className="col-md-3">
              <div className="chef-card shadow-sm hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300"
                  className="img-fluid rounded-circle mb-2"
                  alt="Chef 2"
                />
                <h6 className="fw-bold">Chef Neha</h6>
                <small className="text-muted">Pastry Expert</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="container py-5">
        <h2 className="fw-bold text-center text-success mb-4">We Are Trusted By</h2>

        <div className="trust-box d-flex justify-content-center gap-4 flex-wrap">

          <div className="trust-item fade-in">
            <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="Fresh" />
            <p className="text-muted small mt-1">Fresh Ingredients</p>
          </div>

          <div className="trust-item fade-in-delay">
            <img src="https://cdn-icons-png.flaticon.com/512/3076/3076373.png" alt="Hygiene" />
            <p className="text-muted small mt-1">Top Hygiene</p>
          </div>

          <div className="trust-item fade-in-delay2">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Chef" />
            <p className="text-muted small mt-1">Expert Chefs</p>
          </div>

          <div className="trust-item fade-in-delay3">
            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png" alt="Customer" />
            <p className="text-muted small mt-1">Customer Satisfaction</p>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white py-5">
        <div className="container">
          <h2 className="fw-bold text-success mb-4 text-center">Gallery</h2>

          <div className="row g-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="col-md-4">
                <div className="gallery-item hover-scale">
                  <img
                    src={img}
                    className="img-fluid rounded shadow-sm"
                    alt={`Gallery ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="fw-bold cta-title mb-2">Hungry? Book Your Table</h2>
          <p className="cta-subtitle mb-3">
            Reserve your spot now and enjoy a delightful dining experience!
          </p>

          <button
            className="btn btn-cta"
            onClick={() => navigate("/bookTable")}   // ✅ FIXED
          >
            Book Now <i className="bi bi-arrow-right-short ms-2 arrow-icon"></i>
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;
