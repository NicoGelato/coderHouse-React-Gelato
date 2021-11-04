import { useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import ItemList from "../components/ItemList/ItemList";

import { useItemContext } from "../context/ItemContext";

import { useParams } from "react-router";


const ItemListContainer = () => {
  const { categoryId } = useParams();

  const context = useItemContext();

  const { productos, getProductosDataso } = context;

  const { getProductosData } = getProductosDataso

  console.log(productos, getProductosData);

  /*
  useEffect(() => {
    getProductosData(categoryId);
  }, [])
*/

  if (!productos) {
    return (
      <div className="bg-dark p-2 pt-3 opacity-75">
        <h1 className="text-center text-white h3">
          ☠️ Cargando productos... ☠️
        </h1>
        <div className="d-flex justify-content-center m-5">
          <div
            className="spinner-grow spinner-grow-sm text-light mx-1"
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(productos);

    console.log(categoryId);

    return (
      <>
        <div className="container pt-3">
          <div className="navbar sticky-top-2">
            <ul className="nav nav-tabs">
              <NavLink
                activeClassName=""
                className="nav-link bg-dark text-white border-light"
                to="/Productos"
              >
                Todos los productos
              </NavLink>

              <Link
                activeClassName=""
                className="nav-link bg-dark text-white border-light"
                to={`/Productos/Categoria/Remeras`}
              >
                Remeras
              </Link>

              <NavLink
                activeClassName=""
                className="nav-link bg-dark text-white border-light"
                to={`/Productos/Categoria/Buzos`}
              >
                Buzos
              </NavLink>
            </ul>
          </div>

          <ItemList productos={productos} />
          <ItemList productos={productos} />
        </div>
      </>
    );
  }
};

export default ItemListContainer;
