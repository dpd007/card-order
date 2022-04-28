import "./Buttons.css";
const Buttons = ({ onAddCart, id, count }) => {
  return (
    <div className="buttons">
      <button className="decrement__btn">-</button>
      <button className="show__count">{count}</button>
      <button className="increment__btn" onClick={() => onAddCart(id)}>
        +
      </button>
    </div>
  );
};

export default Buttons;
