import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "../Widgets/CartWidget";
import "./navBar.css";

const NavBar = () => {
  const [notificationBurgerButton, setNotificationBurgerButton] = useState("");

  const hunddleViewNotification = () => {
    notificationBurgerButton === ""
      ? setNotificationBurgerButton("d-none")
      : setNotificationBurgerButton("");
  };



  const { getTotalProducts } = useCartContext();

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark px-4 sticky-top">
      <NavLink className="navbar-brand " to="/">
        <h1 className="text-white h3">☠️ Leeds</h1>
      </NavLink>
      <button
        className="navbar-toggler d-sm-block d-md-none shadow-none border-0"
        onClick={()=> hunddleViewNotification()}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="position-relative">
          <span className="navbar-toggler-icon"></span>
          {getTotalProducts() === 0 ? null : (
            <span
              style={{ fontSize: "0.73rem", fontWeight: "bold" }}
              className={`${notificationBurgerButton} position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger`}
            >
              {getTotalProducts() < 100 ? getTotalProducts() : "99+"}
              <span className="visually-hidden"></span>
            </span>
          )}
        </div>
      </button>

      <div className="collapse navbar-collapse" id="toggleMobileMenu">
        <ul className="navbar-nav ms-auto align-items-start">
          <NavLink
            activeClassName="border-bottom-instagram"
            className="nav-link text-white p-2 mx-2"
            to="/productos"
          >
            Productos
          </NavLink>
          <NavLink
            activeClassName="border-bottom-instagram"
            className="nav-link text-white p-2 mx-2 mt-2 mt-sm-0"
            to="/carrito"
          >
            <CartWidget />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
