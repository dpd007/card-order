import React from "react";
import Card from "./UI/Card";
import StarIcon from "../images/star.png";
const Home = ({ cardList, addProduct, removeProduct }) => {
  return (
    <React.Fragment>
      <h2 className="text-center py-4" style={{ textTransform: "capitalize" }}>
        most popular
      </h2>
      <div className="star__container container">
        <span>
          <img src={StarIcon} alt="" />
        </span>
      </div>
      <Card cardList={cardList} onAdd={addProduct} onRemove={removeProduct} />
    </React.Fragment>
  );
};

export default Home;
