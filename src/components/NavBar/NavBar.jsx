import { NavLink } from "react-router-dom";
import CartWidget from "../Widgets/CartWidget";
import "./navBar.css"


const NavBar = () => {

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark px-4 sticky-top">
      <NavLink className="navbar-brand " to="/">
        <h1 className="text-white h3">☠️ Leeds</h1>
      </NavLink>

      <button
        className="navbar-toggler d-sm-block d-md-none shadow-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
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