import React from "react";
import "./style.css";

import { BsHeart } from "react-icons/bs";
const ButtonFav = () => {
  return (
    <button className="button-fav">
      <BsHeart /> 
      Favorite
    </button>
  );
};

export default ButtonFav;
