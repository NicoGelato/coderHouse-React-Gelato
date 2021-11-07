import { NavLink } from "react-router-dom";
import CartWidget from "../Widgets/CartWidget";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-sm bg-dark px-4 sticky-top shadow">
      <NavLink className="navbar-brand m-1" to="/">
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
            activeClassName="border-bottom"
            className="nav-link text-white p-2 mx-2"
            to="/Contacto"
          >
            Contacto
          </NavLink>
          <NavLink
            activeClassName="border-bottom"
            className="nav-link text-white p-2 mx-2"
            to="/Productos"
          >
            Productos
          </NavLink>
          <NavLink
            activeClassName="border-bottom"
            className="nav-link text-white p-2 mx-2"
            to="/Carrito"
          >
            <CartWidget />
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;