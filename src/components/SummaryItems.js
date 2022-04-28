import Buttons from "./UI/Buttons";
import { Link } from "react-router-dom";
import React from "react";
import PlusIcon from "../images/plus.png";
const SummaryItems = ({ addedCardList, onAddCart, onRemoveFromCart }) => {
  if (addedCardList.length === 0) {
    return <label>Nothing to show</label>;
  }
  return (
    <React.Fragment>
      <table className="table table-responsive summary__table">
        <thead>
          <tr className="py-3">
            <th scope="col">S.No.</th>
            <th scope="col">Items</th>
            <th scope="col">QTY</th>
          </tr>
        </thead>
        <tbody>
          {addedCardList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}.</td>
                <td>{item.name}</td>
                <td>
                  {
                    <Buttons
                      count={item.quantity}
                      onAddCart={onAddCart}
                      id={item.id}
                      onRemoveFromCart={onRemoveFromCart}
                      str="summary"
                    />
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h5 className="py-3">
        <Link to="/" className="ml-2">
          <img id="plus__icon" className="mr-2" src={PlusIcon} alt="" />
        </Link>
        Add more items
      </h5>
    </React.Fragment>
  );
};

export default SummaryItems;
