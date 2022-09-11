import React from "react";
import "./style.css"
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Star = (props) => {
  let { rating } = props;

  if (rating > 0 && rating < 1) {
    return (
      <div className="stars">
        <BsStarHalf />
        <BsStar />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating === 1) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStar />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating > 1 && rating < 2) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating === 2) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarFill />
        <BsStar />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating > 2 && rating < 3) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating === 3) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStar />
        <BsStar />
      </div>
    );
  }
  if (rating > 3 && rating < 4) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </div>
    );
  }
   if (rating === 4) {
     return (
       <div className="stars">
         <BsStarFill />
         <BsStarFill />
         <BsStarFill />
         <BsStarFill />
         <BsStar />
       </div>
     );
   }
  if (rating > 4 && rating < 5) {
    return (
      <div className="stars">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>
    );
  }
    if (rating === 5) {
      return (
        <div className="stars">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      );
    }
};

export default Star;
