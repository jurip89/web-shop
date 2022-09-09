
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./style.css";
import { ProductCard } from "../../components/index";
const Home = ({ handleClickBefore, handleClickMore, products }) => {
  return (
    <div className="home-page">
      
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
