import { createContext, useContext, useState, useEffect } from "react";

import { getProductos } from "../utils/getProductos";

const itemContext = createContext();

const { Provider } = itemContext;

const ProviderItemContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductosData = async () => {
    const productosData = await getProductos();
    setProductos(productosData);
  };

  useEffect(() => {
    getProductosData();
  }, []);

  return <Provider value={{ productos: productos }}>{children}</Provider>;
};

const useItemContext = () => {
  return useContext(itemContext);
};

export { ProviderItemContext, useItemContext };
