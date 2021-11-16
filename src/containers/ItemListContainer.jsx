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

  const getProductosData = async (categoryId) => {
    const productosData = !categoryId
      ? await getProductos()
      : await getProductosByCategory(categoryId);

    setProductos(productosData);
  };


  const productList= useCallback(() => {
      getProductosData(categoryId);
    }, [categoryId])

useEffect(() => {
  setProductos(productList);
}, [productList]);

  if (!productos) {
    return <Loader />;
  } else {
    return (
      <div className="container mt-1">
        <div className="navbar sticky-top-2  ">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className="nav-link bg-dark text-white"
                to="/Productos"
              >
                Todos los productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link bg-dark text-white"
                activeClassName="border-instagram"
                to="/Productos/Categoria/Remeras"
              >
                Remeras{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link bg-dark text-white"
                activeClassName="border-instagram"
                to="/Productos/Categoria/Buzos"
              >
                Buzos
              </NavLink>
            </li>
          </ul>
        </div>
        <ItemList productos={productos} />
      </div>
    );
  }
};

export default ItemListContainer;
