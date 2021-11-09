import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import ItemList from "../components/ItemList/ItemList";

import { getProductos } from "../utils/getProductos";
import { getProductosByCategory } from "../utils/getProductosByCategory";
import Loader from "../components/Loader/Loader";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [productos, setProductos] = useState(null);

  const getProductosData = useCallback( async (categoryId) => {
    const productosData = !categoryId
      ? await getProductos()
      : await getProductosByCategory(categoryId);

    setProductos(productosData);
  })

  useEffect(() => {
    getProductosData(categoryId);
  }, [categoryId]);

  if (!productos) {
    return <Loader />;
  } else {
    const categorias = ["Remeras", "Buzos"];

    return (
      <>
        <div className="container pt-3">
          <div className="navbar sticky-top-2">
            <ul className="nav nav-tabs">
              <NavLink
                className="nav-link bg-dark text-white border-light"
                to="/Productos"
              >
                Todos los productos
              </NavLink>

              {categorias.map((categoria, index) => (
                <NavLink
                  key={index}
                  className="nav-link bg-dark text-white border-light"
                  activeClassName="shadow"
                  to={`/Productos/Categoria/${categoria}`}
                >
                  {categoria}
                </NavLink>
              ))}
            </ul>
          </div>
          <ItemList productos={productos} />
        </div>
      </>
    );
  }
};

export default ItemListContainer;
