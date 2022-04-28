import React from "react";
import ArrowIcon from "../images/arrow_left.png";
import "./Summary.css";
import { Link } from "react-router-dom";
import SummaryItems from "./SummaryItems";
import PriceDetails from "./PriceDetails";
import { useSelector } from "react-redux";
const Summary = ({ orderAdded, addProduct, removeProduct }) => {
  const onAddCart = (id) => {
    addProduct(id);
  };
  const removeFromCart = (id) => {
    removeProduct(id);
  };
  const cardList = useSelector((state) => state.cardList);
  const addedItems = cardList.filter((item) => item.quantity > 0);
  return (
    <div className="container">
      <div className="summary__header py-4">
        <Link to="/">
          <img src={ArrowIcon} alt="" />
        </Link>
        <label className="ml-3">Back to Home</label>
        <h4>Order Summary ({`${orderAdded} items`})</h4>
        <div className="row py-4">
          <div className="col-md-6 col-sm-12 col-xs-12 card">
            <SummaryItems
              addedCardList={addedItems}
              onAddCart={onAddCart}
              onRemoveFromCart={removeFromCart}
            />
          </div>
          <div className="col-md-5 col-sm-12 col-xs-12 card ml-3 details__container">
            <PriceDetails addedCardList={addedItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
