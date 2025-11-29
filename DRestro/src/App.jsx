import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookTable from "./pages/BookTable";

const App = () => {
  const navigate = useNavigate();

  // CART STATE
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ADD TO CART
  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart((prev) => [...prev, { ...item, qty: 1 }]);
    }

    setIsCartOpen(true);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* HEADER */}
      <Header cartCount={totalCount} />

      {/* ROUTES */}
      <main className="flex-grow-1 w-100 px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookTable" element={<BookTable />} />
        </Routes>
      </main>

      <Footer />

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/918000000000?text=Hello! I want to order food 😊"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* CART FLOAT ICON */}
      <div className="floating-cart" onClick={() => setIsCartOpen(true)}>
        <i className="bi bi-cart"></i>
        {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
      </div>

      {/* CART SLIDER */}
      <div className={`cart-slider ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h4>Your Cart</h4>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="empty"
            />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <h6>{item.name}</h6>
                  <small>₹{item.price * item.qty}</small>
                </div>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(item.id)}>–</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}

            <h5 className="cart-total">
              Total: ₹
              {cart.reduce((sum, item) => sum + item.price * item.qty, 0)}
            </h5>

            <button
              className="checkout-btn"
              onClick={() => navigate("/contact")}
            >
              Proceed to Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
