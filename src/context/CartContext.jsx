import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext([]);

const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const setAndStore = (list) => {
    setItems(list);
    localStorage.setItem("items", JSON.stringify(list));
  };

  const addToCart = (id, title, quantity, price) => {
    const existItem = items.find((item) => item.id === id);

    if (!existItem) {
      const item = [
        ...items,
        { id: id, title: title, quantity: quantity, price: price },
      ];
      setAndStore(item);
    } else {
      existItem.quantity += quantity;
      setAndStore([...items]);
    }
  };

  
  const removeItem = (id) => {
    if (items.length > 0) {
      const updateItems = items.filter((item) => {
        return item.id !== id;
      });
      setAndStore(updateItems);
    }
  };

  const getTotalItems = () => {
    return items.reduce((totalCount, item) => {
      return totalCount + item.quantity;
    }, 0);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(items);
  }, []);


  return (
    <Provider value={{ items, setItems, addToCart, removeItem, getTotalItems }}>
      {children}
    </Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
