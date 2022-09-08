import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { ProductCard } from "../../components/index";
const Home = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const prods = await axios.get("http://localhost:4000/products");
    console.log(prods.data);
    setProducts(prods.data);
  };
  // const [categories, setCategories] = useState([]);
  // const getCat = async () => {
  //   const cat = await axios.get("http://localhost:4000/categories");
  //   console.log(cat.data);
  //   setCategories(cat.data);
  // };
  useEffect(() => {
    getData();
    // getCat();
  }, []);
  return (
    <div className="home-page">
      {/* <div>{categories.title}</div> */}
      <div className="products-container">
        {products?.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default Home;
