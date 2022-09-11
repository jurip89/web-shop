import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Spinner, BtnCart, BtnFav, Star } from "../../components/index";

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [category, setCategory] = useState();
 
  useEffect(() => {
     const getData = async (productId) => {
       const cats = await axios.get(
         `http://localhost:4000/products/${productId}`
       );
       console.log(cats.data);
       setProduct(cats.data);
       getCategory(cats.data.categoryId);
     };
     const getCategory = async (id) => {
       const cats = await axios.get(`http://localhost:4000/categories/${id}`);
       console.log(cats.data);
       setCategory(cats.data);
     };
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
              <p className="product-rating-cat">Review: {product.rating}/5 </p>
              <Star rating={product.rating} />
              <button className="button-review">Add Review</button>
              <p className="cat-share-price-titles">€{product.price}</p>
              <p className="text-prod-description">{product.description}</p>
              <div>
                  <BtnCart />
                  <BtnFav />
              </div>
              {category && (
                <p className="cat-share-price-titles">
                  Categories: {category.title}
                </p>
              )}
              <p className="cat-share-price-titles">
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
              <p className="text-prod-description">{product.description}</p>
              {/* <h5 className="title-description">Title 2</h5>
              <p className="text-prod-description">some text.</p> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
