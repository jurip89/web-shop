import React, { useState, useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
    <footer className="footer-container">
      <div>
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
            <ul>
              <NavLink to="/discount" className="links">
                Discount
              </NavLink>
              <NavLink to="/returns" className="links">
                Returns
              </NavLink>
              <NavLink to="/ordershistory" className="links">
                Orders History
              </NavLink>
              <NavLink to="/ordertracking" className="links">
                Order Tracking
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="title-footer">Follow Us</div>
      </div>
    </footer>
  );
};

export default Footer;
