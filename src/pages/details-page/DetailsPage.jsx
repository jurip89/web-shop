import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Spinner, BtnCart, BtnFav } from "../../components/index";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const getData = async (productId) => {
    const cats = await axios.get(`http://localhost:4000/products/${productId}`);
    console.log(cats.data);
    setProduct(cats.data);
  };
  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      {!product ? (
        <Spinner />
      ) : (
        <>
          <div className="product-panel">
            <h2 className="product-title">{product.title}</h2>
            <img className="image" src={product.mainImage} alt="" />
            <p className="product-rating">{product.rating}</p>
            <button className="button-review">Add review</button>
            <p className="product-price">€{product.price}</p>
            <p className="product-description">{product.description}</p>
            <span>
              <BtnCart />
              <BtnFav />
            </span>
          </div>
          <div className="description">
            <div className="description-panel">
              <div className="description-header">
                <h5>Description</h5>
                <h5>Additional Info</h5>
                <h5>Reviews</h5>
              </div>
              <h5 className="title-description">Title</h5>
              <p className="text-description">some text.</p>
              <h5 className="title-description">Title 2</h5>
              <p className="text-description">some text.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
