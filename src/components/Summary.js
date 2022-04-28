import React from "react";
import ArrowIcon from "../images/arrow_left.png";
import "./Summary.css";
import { Link } from "react-router-dom";
import SummaryItems from "./SummaryItems";
import PriceDetails from "./PriceDetails";
const Summary = ({ cardList, orderAdded, addProduct }) => {
  const onAddCart = (id) => {
    addProduct(id);
  };
  return (
    <div className="container">
      <div className="summary__header py-4">
        <Link to="/">
          <img src={ArrowIcon} alt="" />
        </Link>
        <label className="ml-3">Back to Home</label>
        <h4>Order Summary ({`${orderAdded} items`})</h4>
        <div className="row py-4">
          <div className="col-md-6 card">
            <SummaryItems cardList={cardList} onAddCart={onAddCart} />
          </div>
          <div className="col-md-5 card ml-3">
            <PriceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
