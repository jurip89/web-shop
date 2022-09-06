import React from "react";
import "./style.css";
const ProductCard = ({ data }) => {
  return (
    <div className="prod-card">
      <div>
        <img className="prod-img" src={data.mainImage} alt={data.title} />
      </div>
      <div className="prod-content">
        <h5>{data.title}</h5>
        <p>Price: {data.price}</p>
        <p>Rating: {data.rating}/5</p>
      </div>
    </div>
  );
};

export default ProductCard;
