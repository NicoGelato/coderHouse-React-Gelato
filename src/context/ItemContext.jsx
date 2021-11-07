import { createContext, useContext, useState, useEffect } from "react";

import { getProductos } from "../utils/getProductos";
import { getProductosByCategory } from "../utils/getProductosByCategory";

const itemContext = createContext();

const { Provider } = itemContext;

const ItemContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);


  
  return <Provider value={{ productos: productos }}>{children}</Provider>;
};

const useItemContext = () => {
  return useContext(itemContext);
};

export { ItemContextProvider, useItemContext };
