// Componente padre : Navbar

// Librerias
import { NavLink } from "react-router-dom";

// Componentes hijo
import CartWidget from "../../Widgets/CartWidget";

const LinksDelNavBar = ({ links }) => {
  return (
    <div className="collapse navbar-collapse" id="toggleMobileMenu">
      <ul className="navbar-nav ms-auto align-items-start">
        {links.map((link, index) => (
          <NavLink
            activeClassName="border-bottom"
            key={`linkN${index}`}
            className="nav-link text-white p-2 mx-2"
            to={`/${link}`}
          >
            {link}
          </NavLink>
        ))}
        <NavLink className="nav-link text-white p-2 mx-2" to="/Carrito">
          <CartWidget />
        </NavLink>
      </ul>
    </div>
  );
};

export default LinksDelNavBar;