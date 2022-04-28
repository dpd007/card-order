import React from "react";
import "./Card.css";
// import { useState } from "react";
const Card = ({ cardList }) => {
  // const [isAdded, setIsAdded] = useState([]);
  return (
    <div className="row">
      {cardList.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="col-md-4 py-3">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={item.img_url} alt="" />
              </div>
              <div className="card__details py-3">
                <div className="first">
                  <div className="name">{item.name}</div>
                  {item.id === 1 ? (
                    <React.Fragment>
                      <div className="price__original text-muted">
                        ${item.original_price.toFixed(2)}
                      </div>
                      <div className="price">
                        ${item.final_price.toFixed(2)}
                      </div>
                    </React.Fragment>
                  ) : (
                    <div className="price">${item.final_price.toFixed(2)}</div>
                  )}
                </div>
                <div className="description text-muted">{item.description}</div>
              </div>
              <div className="card__footer">
                <button>Add to Cart</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Card;
