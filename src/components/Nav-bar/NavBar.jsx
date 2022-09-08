import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { BsPerson, BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";


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
        <div className="box">
          <input type="text" className="input" name="txt" />
          <BiSearch className="i" />
        </div>
      </div>

      <div className="nav-icons">

          <NavLink to="/login" className="links">
            <BsPerson />
          </NavLink>
         
          <NavLink to="/shoppingcart" className="links">
            <FiShoppingCart />
          </NavLink>
          
          <NavLink to="/favorites" className="links">
            <BsHeart />
          </NavLink>
      
      </div>
    </nav>
  );
};

export default NavBar;
