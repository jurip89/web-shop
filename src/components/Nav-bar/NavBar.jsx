import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="main-nav">
        <h3 className="nav-title">
          <span className="nav-span">The</span>Shop
        </h3>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/products" className="links">
          Products
        </NavLink>
        <NavLink to="/blog" className="links">
          Blog
        </NavLink>
        <NavLink to="/shop" className="links">
          Shop
        </NavLink>
        <NavLink to="/contacts" className="links">
          Contacts
        </NavLink>
      </div>
      <div className="nav"></div>
    </nav>
  );
};

export default NavBar;
