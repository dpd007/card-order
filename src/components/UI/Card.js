import React from "react";
import "./Card.css";
import Chip from "../../images/chip.png";
import WifiLogo from "../../images/wifi.png";
const Card = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__inner">
          <div className="front">
            <div className="front__header pt-2">
              <p>Food</p>
            </div>
            <div className="front__middle py-1">
              <img src={Chip} alt="" />
              <img src={WifiLogo} className="mx-1" id="wifi__logo" alt="" />
            </div>
            <div className="card__footer pt-5">
              <p>
                <span>corporate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Card;
