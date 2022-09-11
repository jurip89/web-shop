import React from "react";
import "./style.css";
import { FiShoppingCart } from "react-icons/fi";


const ButtonCart = () => {
  return (
    
      <button className="button-cart">
        <FiShoppingCart /> &nbsp;&nbsp; Add To Cart
      </button>
    
  );
};

export default ButtonCart;
