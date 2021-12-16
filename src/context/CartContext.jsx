import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext([]);

const { Provider } = cartContext;

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const setAndStore = (list) => {
    setProducts(list);
    localStorage.setItem("products", JSON.stringify(list));
  };

  
  const removeProduct = (id) => {
    const downProduct = products.filter((product) => {
      return product.id !== id;
    });
    setAndStore(downProduct);
  };

  const addToCart = (id, image, title, quantity, price) => {
    const existProduct = products.find((product) => product.id === id);

    if (!existProduct) {
      const product = [
        ...products,
        {
          id: id,
          image: image,
          title: title,
          quantity: quantity,
          price: price,
        },
      ];
      setAndStore(product);
    } else {
      existProduct.quantity += quantity;
      setAndStore([...products]);
    }
  };

  const undoAddToCart = (id, quantity) => {
    const existProduct = products.find((product) => product.id === id);
    if (existProduct) {
      existProduct.quantity -= quantity;
      setAndStore([...products]);
    } else {
      removeProduct(id);
    }
  }


  const getTotalProducts = () => {
    return products.reduce((totalCount, product) => {
      return totalCount + product.quantity;
    }, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((totalCount, product) => {
      return totalCount +( product.quantity * product.price);
    }, 0);
  }

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(products);
  }, []);

  return (
    <Provider
      value={{
        products,
        addToCart,
        removeProduct,
        getTotalProducts,
        getTotalPrice,
        undoAddToCart,
      }}
    >
      {children}
    </Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
