import React from "react";
import Buttons from "./Buttons";
import "./Card.css";
const Card = ({ cardList, onAdd }) => {
  const onAddCart = (id) => {
    onAdd(id);
  };
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
              {item.addToCartCount === 0 && item.addToCart === false ? (
                <div className="card__footer">
                  <button onClick={() => onAddCart(item.id)}>
                    Add to Cart
                  </button>
                </div>
              ) : (
                <Buttons
                  count={item.addToCartCount}
                  onAddCart={onAddCart}
                  id={item.id}
                />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Card;
