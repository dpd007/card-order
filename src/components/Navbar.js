import MainLogo from "../images/blue_logo.svg";
import ProfileIcon from "../images/profile.png";
import CartIcon from "../images/cart.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ orderAdded }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="true">
        <div className="brand__logo">
          <img src={MainLogo} alt="" />
        </div>
        <div className="brand__text">Happay</div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <form className="form-inline my-2 my-lg-0 cart__container">
          <Link to="order-summary" className="">
            <img src={CartIcon} className="cart__icon img-fluid" alt="" />
            <span className="badge badge-light">{orderAdded}</span>
          </Link>
          <img src={ProfileIcon} className="profile__icon img-fluid" alt="" />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
