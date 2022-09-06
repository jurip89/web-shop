import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailsPage = () => {
  const {id}= useParams()
  const [product, setProduct] = useState();
  const getData = async (productId) => {
    const cats = await axios.get(`http://localhost:4000/products/${productId}`);
    console.log(cats.data)
    setProduct(product);
  };
  useEffect(() => {
    getData(id);
  }, []);
  return (
    <div>
      {" "}
      Banner
      <div>
        <h2>Product</h2>
        <button>Review</button>
        <button>Add to cart</button>
        <button>Favorite</button>
      </div>
      <div>description+review</div>
    </div>
  );
};

export default DetailsPage;
