import React, { useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const cats = await axios.get("http://localhost:4000/categories");
    setCategories(cats.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="title-footer">Title</div>
        <div className="title-footer">
          Categories
          <div className="categories-footer">
            <ul>
              {categories?.map((category) => (
                <li key={category?.id}>{category?.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="title-footer">
          My account
          <div className="account-footer">
            <NavLink to="/discount" className="link">
              Discount
            </NavLink>
            <NavLink to="/returns" className="link">
              Returns
            </NavLink>
            <NavLink to="/ordershistory" className="link">
              Orders History
            </NavLink>
            <NavLink to="/ordertracking" className="link">
              Order Tracking
            </NavLink>
          </div>
        </div>
        <div className="title-footer">
          Follow Us
          <br />
          <button className="button">
            <BsFacebook />
          </button>
         
          <button className="button">
            <BsInstagram />
          </button>
        
          <button className="button">
            <BsTwitter />
          </button>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
