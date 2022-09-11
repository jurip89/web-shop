import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const ShoppingCart = () => {
  const location = useLocation();
  const product = location.state;
  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState();

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    if (quantity === undefined) {
      setQuantity(1);
    }
    setTotal(product.price * quantity);
  }, [product, quantity]);

  return (
    <div>
      <div className="cart">
        <div className="cart-panel">
          <div className="title">Product</div>
          <div className="title">Price</div>
          <div className="title">Quantity</div>
          <div className="title">Total </div>
        </div>
        <div className="prod-panel">
          <img className="img" src={product.mainImage} alt=""></img>
          <div className="title-prod">{product.title}</div>
          <div className="prod-info">€ {product.price}</div>
          <div className="prod-qtt">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={onChangeQuantity}
            />
          </div>
          <div className="prod-info">€ {total}</div>
        </div>
        <div className="cart-total">Cart Total</div>
      </div>
      
    </div>
  );
};

export default ShoppingCart;
