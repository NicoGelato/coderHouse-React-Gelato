import { createContext, useContext, useState, useEffect } from "react";

import { getProductos } from "../utils/getProductos";
import { getProductosByCategory } from "../utils/getProductosByCategory";

const itemContext = createContext();

const { Provider } = itemContext;

const ProviderItemContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const getProductosData = async (categoryId) => {
    const productosData = !categoryId
      ? await getProductos()
      : await getProductosByCategory(categoryId);

    console.log(productosData);

    setProductos(productosData);
  };

  useEffect(() => {
    getProductosData();
  }, []);

  return (
    <Provider
      value={{ productos: productos, getProductosDataso: { getProductosData } }}
    >
      {children}
    </Provider>
  );
};

const useItemContext = () => {
  return useContext(itemContext);
};

export { ProviderItemContext, useItemContext };
