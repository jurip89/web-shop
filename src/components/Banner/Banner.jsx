import React from "react";
import "./style.css";
import image from "../../utils/image.png";
const Banner = () => {
  return (
    <header className="banner-container">
      <div className="banner-title">
        <h2 className="title-banner">
          Products for every need,
          <br /> at the distance of a click
        </h2>
      </div>
      <div className="banner-image">
        <img className="banner-img" src={image} alt="lady with a dress" />
      </div>
    </header>
  );
};

export default Banner;
