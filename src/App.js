import Navbar from "./components/Navbar";
import Card from "./components/UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { cardListActions as actions } from "./store/CardListSlice";
import StarIcon from "./images/star.png";

function App() {
  const cardList = useSelector((state) => state.cardList);
  const dispatch = useDispatch();
  const handleAddToCard = (id) => {
    dispatch(actions.add(id));
  };
  const handleRemoveToCard = (id) => {
    dispatch(actions.remove(id));
  };
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
        <Card cardList={cardList} onAdd={handleAddToCard} />
      </div>
    </div>
  );
}

export default App;
