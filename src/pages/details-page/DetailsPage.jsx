import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


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
      <div className="product-panel">
        <h2 className="product-title">{product?.title}</h2>
        <img className="image" src={product?.mainImage} alt="" />
        <span>
          <p className="product-rating">Review: {product?.rating}</p>
          <button className="button-review">Add Review</button>
        </span>
        <p className="product-price">€{product?.price}</p>
        <p className="product-description">{product?.description}</p>
        <span>
          <button className="button-cart">
            <FiShoppingCart /> Add To Cart
          </button>
          <button className="button-fav">
            <BsHeart /> Favorite
          </button>
        </span>
        <p className="cat-share-titles">Categories: </p>
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
      <div className="description">
        <div className="description-panel">
          <div className="description-header">
            <h5>Description</h5>
            <h5>Additional Info</h5>
            <h5>Reviews</h5>
          </div>
          <h5 className="title-description">More details</h5>
          <p className="text-description">{product?.description}</p>
          <h5 className="title-description">Title 2</h5>
          <p className="text-description">some text.</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
