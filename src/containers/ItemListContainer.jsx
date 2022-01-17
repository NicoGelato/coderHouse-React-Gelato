import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { getProductos } from "../utils/backend/getProductos";
import { getProductosByCategory } from "../utils/backend/getProductosByCategory";
import { firstLetterUpperCase } from "../utils/frontend/firstLetterUpperCase";

import ItemList from "../components/ItemList/ItemList";
import Loader from "../components/Loader/Loader";

import Carrousel from "../components/Carrousel/Carrousel";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);

  const { categoryId } = useParams();

  const getProductosData = async (categoryId) => {
    try {
      const productosData = !categoryId
        ? await getProductos()
        : await getProductosByCategory(firstLetterUpperCase(categoryId));

      setProductos(productosData);
    } catch (error) {
      console.log(error);
    }
  };

  const productList = useCallback(() => {
    getProductosData(categoryId);
  }, [categoryId]);

  useEffect(() => {
    setProductos(productList);
  }, [productList]);

  return (
    <>
      <Carrousel />
      {!productos || productos.length === 0 ? (
        <Loader />
      ) : (
        <div className="container">
          <nav className="navbar sticky-top-2  ">
            <ul className="nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link bg-dark text-white"
                  to="/productos"
                >
                  Todos los productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bg-dark text-white"
                  activeClassName="border-instagram"
                  to="/productos/categoria/remeras"
                >
                  Remeras{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link bg-dark text-white"
                  activeClassName="border-instagram"
                  to="/productos/categoria/buzos"
                >
                  Buzos
                </NavLink>
              </li>
            </ul>
          </nav>
          <ItemList productos={productos} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
