import Navbar from "./components/Navbar";
import Card from "./components/UI/Card";
import { useDuspatch, useSelector } from "react-redux";
import { cardListActions } from "./store/CardListSlice";
import StarIcon from "./images/star.png";

function App() {
  const cardList = useSelector((state) => state.cardList);
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <h2
          className="text-center py-4"
          style={{ textTransform: "capitalize" }}
        >
          most popular
        </h2>
        <div className="star__container container">
          <span>
            <img src={StarIcon} alt="" />
          </span>
        </div>
        <Card cardList={cardList} />
      </div>
    </div>
  );
}

export default App;
