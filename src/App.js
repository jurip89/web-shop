import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import { Home, Shop, DetailsPage } from "./pages/index";


import { NavBar, Banner, Footer } from "./components/index";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Browser>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </Browser>
    </div>
  );
}

export default App;
