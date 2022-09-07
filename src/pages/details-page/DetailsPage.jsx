import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


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
            <img className="image" src={product.mainImage} alt="" />
            <div className="content">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-rating">Review: {product.rating}/5</p>
              <button className="button-review">Add Review</button>
              <p className="product-price">€{product.price}</p>
              <p className="product-description">{product.description}</p>
              <div >
                <BtnCart />
                <BtnFav />
              </div>
              <p className="cat-share-titles">
                Share{" "}
                <button className="share-buttons">
                  <BsFacebook />
                </button>
                <button className="share-buttons">
                  <BsInstagram />
                </button>
                <button className="share-buttons">
                  <BsTwitter />
                </button>
              </p>
            </div>
          </div>
          <div className="description">
            <div className="description-panel">
              <div className="description-header">
                <h5>Description</h5>
                <h5>Additional Info</h5>
                <h5>Reviews</h5>
              </div>
              <h5 className="title-description">More details</h5>
              <p className="text-description">{product.description}</p>
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
