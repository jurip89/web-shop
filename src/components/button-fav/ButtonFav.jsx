import React from "react";
import "./style.css";

import { BsHeart } from "react-icons/bs";
const ButtonFav = () => {
  return (
    <button className="button-fav">
      <BsHeart />
      &nbsp;&nbsp;Favorite
    </button>
  );
};

export default ButtonFav;
