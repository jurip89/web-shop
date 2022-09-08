import React, { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./style.css";
import axios from "axios";
import { ProductCard } from "../../components/index";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const options = {
    method: "GET",
    url: "http://localhost:4000/products",
    params: { offset },
  };
  const getData = async () => {
    const prods = await axios.request(options);
    console.log(prods.data);
    setProducts(prods.data);
  };

  const handleClickMore = () => {
    setOffset((prev) => prev + 10);
  };
  const handleClickBefore = () => {
    setOffset((prev) => prev - 10);
  };
  useEffect(() => {
    getData();
  }, [offset]);


  return (
    <div className="home-page">
      {/* <div>{categories.title}</div> */}
      <div className="products-container">
        {products?.map((el) => (
          <ProductCard key={el.id} data={el} />
        ))}
      </div>
      <div className="offset-panel">
        <button className="offset" onClick={handleClickBefore}>
          Back <BsFillArrowLeftCircleFill />
        </button>
        <button className="offset" onClick={handleClickMore}>
          More <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Home;
