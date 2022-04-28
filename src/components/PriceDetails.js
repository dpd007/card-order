import React from "react";
import "./PriceDetails.css";
const PriceDetails = ({ addedCardList }) => {
  if (addedCardList.length === 0) {
    return <label>Nothing to show</label>;
  }
  const deliveryFee = 5;
  const tax = 2;
  const savings = 18;
  const calculateTotal =
    addedCardList
      .map((item) => item.quantity * item.final_price)
      .reduce((prev, curr) => prev + curr, 0) +
    deliveryFee +
    tax -
    savings;
  return (
    <React.Fragment>
      <div className="price__details__container p-4">
        <h5 className="pb-4">Price Details</h5>
        {addedCardList.map((item) => {
          return (
            <div className="price__summary py-2" key={item.id}>
              <div className="individual__price py-2">
                {`${item.quantity} * $ ${item.final_price.toFixed(2)}`}
              </div>
              <div className="total__price py-2">
                {`$ ${item.quantity * item.final_price.toFixed(2)}`}
              </div>
            </div>
          );
        })}
        <hr style={{ color: "black" }} />
        <div className="pricing py-2">
          <label>Total Savings</label>
          <label>-${savings.toFixed(2)}</label>
        </div>
        <div className="pricing py-2">
          <label>Delivery Fee</label>
          <label>${deliveryFee.toFixed(2)}</label>
        </div>
        <div
          className="pricing py-2"
          style={{ borderBottom: "1px solid black" }}
        >
          <label>Taxes and Charges</label>
          <label>${tax.toFixed(2)}</label>
        </div>
        <div className="final__pricing pt-4">
          <label style={{ color: "#65a4d3", fontWeight: "600" }}>To Pay</label>
          <label>${calculateTotal.toFixed(2)}</label>
        </div>
        <button className="mt-5">Place Order</button>
      </div>
    </React.Fragment>
  );
};

export default PriceDetails;
