import { createContext, useContext , useState } from "react";

const cartContext = createContext([]);

const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (title, quantity, id, price) => {
    const item = [
      ...items,
      { id: id, title: title, quantity: quantity, price: price },
    ];
    setItems(item);
  };

  const removeItem = (id) => {
    if (items.length > 0) {
      const updateItems = items.filter(function (item) {
        return item.productId !== id;
      });
      setItems(updateItems);
    }
  };

  return (
    <Provider value={{ items, setItems, addToCart, removeItem }}>
      {children}
    </Provider>
  );
};


const useCartContext = () => {
  return useContext(cartContext);
};


export { CartProvider, useCartContext };