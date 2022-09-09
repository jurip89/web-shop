import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import { Home, Shop, DetailsPage, Login, Signup } from "./pages/index";
import { NavBar, Banner, Footer } from "./components/index";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
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
 
  const handleChange = (e) => {
    const newProducts = products.filter(el => el.title.includes(e.target.value) ) 
  }

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
    <div className="App">
      <Browser>
        <NavBar />
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                handleClickMore={handleClickMore}
                handleClickBefore={handleClickBefore}
              />
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Browser>
    </div>
  );
}

export default App;
