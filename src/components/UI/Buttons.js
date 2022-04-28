import "./Buttons.css";
const Buttons = ({ onAddCart, id, count, str }) => {
  return (
    <div className={str === "summary" ? `summary__buttons` : `buttons`}>
      <button
        className={str === "summary" ? `summary__decrement__btn` : `decrement__btn`}
      >
        -
      </button>
      <button
        className={str === "summary" ? `summary__show__count` : `show__count`}
      >
        {count}
      </button>
      <button
        className={str === "summary" ? `summary__increment__btn` : `increment__btn`}
        onClick={() => onAddCart(id)}
      >
        +
      </button>
    </div>
  );
};

export default Buttons;
