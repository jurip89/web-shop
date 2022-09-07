import React, { useState, useEffect } from "react";
import "./style.css";
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
        <div className="title-footer">
          <h3 className="footer-title">
            <span className="footer-span">The</span>
            <span>Shop</span>
          </h3>
        </div>
        <div className="title-footer">
          Categories
          <div className="categories-footer">
            <ul className="ul-style">
              {categories?.map((category) => (
                <li key={category?.id}>{category?.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="title-footer">
          My account
          <div className="account-footer">
            <ul className="ul-style">
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
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
