import React from "react";
import "./style.css";
const Banner = () => {
  return (
    <header className="banner-container">
      <div className="banner-title">
        <h2 className="title-banner">
          Products for every need,
          <br /> ar the distance of a click
        </h2>
      </div>
      <div className="banner-image">
        <img
          className="banner-img"
          src="https://images.unsplash.com/photo-1582533575066-75bd83ac91de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80"
          alt="lady with a dress"
        />
      </div>
    </header>
  );
};

export default Banner;
