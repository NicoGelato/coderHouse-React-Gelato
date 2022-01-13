import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import { getProductos } from "../utils/getProductos";
import { getProductosByCategory } from "../utils/getProductosByCategory";
import { firstLetterUpperCase } from "../utils/firstLetterUpperCase"

import ItemList from "../components/ItemList/ItemList";
import Loader from "../components/Loader/Loader";

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
      console.log(error)
    }
  };

  const productList = useCallback(() => {
      getProductosData(categoryId);
    }, [categoryId])

  useEffect(() => {
    setProductos(productList);
  }, [productList]);

  if (!productos || productos.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="container mt-1">
        <navbar className="navbar sticky-top-2  ">
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
        </navbar>
        <ItemList productos={productos} />
      </div>
    );
  }
};

export default ItemListContainer;
