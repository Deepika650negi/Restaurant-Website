import React, { useState } from "react";
import { menuItems } from "../menuData";

const Menu = ({ setActiveTab, addToCart, openCart }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  const filteredItems = menuItems.filter((item) => {
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchType =
      filterType === "veg"
        ? item.isVeg
        : filterType === "nonveg"
        ? !item.isVeg
        : true;

    const matchCategory =
      activeCategory === "All" ? true : item.category === activeCategory;

    return matchSearch && matchType && matchCategory;
  });

  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-4" style={{ color: "#7A2E2E" }}>
        Explore Our Menu
      </h2>

      {/* SEARCH BAR */}
      <input
        type="text"
        className="form-control p-3 mb-4 shadow-sm"
        placeholder="Search your favourite dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ borderRadius: "20px", border: "1px solid #e3c8c4" }}
      />

      {/* FILTER (Veg / Nonveg / All) */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className="btn fw-bold px-4 py-2 rounded-pill"
          style={{
            background: filterType === "veg" ? "#7A2E2E" : "#f8e9e7",
            color: filterType === "veg" ? "white" : "#7A2E2E",
          }}
          onClick={() => setFilterType("veg")}
        >
          Veg Only
        </button>

        <button
          className="btn fw-bold px-4 py-2 rounded-pill"
          style={{
            background: filterType === "nonveg" ? "#7A2E2E" : "#f8e9e7",
            color: filterType === "nonveg" ? "white" : "#7A2E2E",
          }}
          onClick={() => setFilterType("nonveg")}
        >
          Non-Veg
        </button>

        <button
          className="btn fw-bold px-4 py-2 rounded-pill"
          style={{
            background: filterType === "all" ? "#7A2E2E" : "#f8e9e7",
            color: filterType === "all" ? "white" : "#7A2E2E",
          }}
          onClick={() => setFilterType("all")}
        >
          All
        </button>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="d-flex gap-3 overflow-auto mb-4 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn px-4 py-2 fw-bold rounded-pill"
            style={{
              whiteSpace: "nowrap",
              background: activeCategory === cat ? "#7A2E2E" : "#F4DDDA",
              color: activeCategory === cat ? "white" : "#7A2E2E",
            }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU GRID */}
      <div className="row g-4">
        {filteredItems.map((item) => (
          <div className="col-md-4 col-sm-6" key={item.id}>
            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                background: "#ffffff",
                transition: "0.3s",
              }}
            >
              <div style={{ height: "150px", overflow: "hidden" }}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderBottom: "1px solid #eee" }}
                />
              </div>

              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="fw-bold mb-1" style={{ color: "#7A2E2E" }}>
                    {item.name}
                  </h6>

                  {/* Veg / Nonveg */}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      border: `2px solid ${item.isVeg ? "green" : "red"}`,
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        background: item.isVeg ? "green" : "red",
                        margin: "1px auto",
                      }}
                    ></div>
                  </div>
                </div>

                <p className="text-muted small mb-2" style={{ fontSize: "12px" }}>
                  {item.description}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <strong style={{ color: "#7A2E2E" }}>₹{item.price}</strong>

                  <button
                    className="btn"
                    style={{
                      background: "#7A2E2E",
                      color: "white",
                      padding: "3px 12px",
                      fontSize: "13px",
                      borderRadius: "20px",
                    }}

                    onClick={() => {
                      addToCart(item);  
                      openCart;      
                    }}
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredItems.length === 0 && (
          <p className="text-center text-muted mt-5">No items found!</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
