import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BtnFav, BtnCart } from "../index";
import "./style.css";

const ProductCard = ({ data }) => {
  return (
    <div className="prod-card">
      <div className="prod-img-container">
        <img className="prod-img" src={data.mainImage} alt={data.title} />
      </div>
      <div className="prod-content">
        <NavLink to={`/details/${data.id}`} className="link-title">
          <h5>{data.title}</h5>
        </NavLink>

        <p>Price: € {data.price}</p>
        <p>Rating: {data.rating}/5</p>
        <Link to={{
                pathname:"/shoppingcart",
          }} 
                state={
                  data
                }
          >
          <BtnCart />
        </Link>
        <BtnFav />
      </div>
    </div>
  );
};

export default ProductCard;
