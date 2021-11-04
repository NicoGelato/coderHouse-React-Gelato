//Componente Padre : AppRoutes

import { Link } from "react-router-dom";

//Componentes hijos
import LinksDelNavbar from "./LinksDelNavbar";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark px-4 sticky-top shadow"
     // style={{ opacity: "0.9" }}
    >
      <Link className="navbar-brand m-1" to="/">
        <h1 className="text-white h3">☠️ Leeds</h1>
      </Link>

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

      <LinksDelNavbar links={["Contacto", "Productos"]} />

      
    </nav>
  );
};

export default NavBar;