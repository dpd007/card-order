import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cardListActions as actions } from "./store/CardListSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Summary from "./components/Summary";

function App() {
  const cardList = useSelector((state) => state.cardList);
  const dispatch = useDispatch();
  const handleAddToCard = (id) => {
    dispatch(actions.add(id));
  };
  const handleRemoveToCard = (id) => {
    dispatch(actions.remove(id));
  };
  let count = 0;
  cardList.forEach((item) => {
    if (item.addToCart) {
      count++;
    }
  });
  return (
    <div className="App">
      <div className="container">
        <Navbar orderAdded={count} />
        <Routes>
          <Route
            path="/"
            element={<Home cardList={cardList} addProduct={handleAddToCard} />}
          />
          <Route
            path="/order-summary"
            element={
              <Summary
                cardList={cardList}
                orderAdded={count}
                addProduct={handleAddToCard}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
