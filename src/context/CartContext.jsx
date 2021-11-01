import { createContext, useState } from "react";

const cartContext = createContext();

const { Provider } = cartContext;

const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([]);

    const addItem = (producto, cantidad) => {
        setCart(...producto, cantidad)
     };

    const valorDeCartContextProvider = {
        cart,
        addItem
    }
    
    //Agregar las funcionalidades luego
    /*
    const removeItem = () => { };
    const isInCart = () => { };
    */
    

    return <Provider value={valorDeCartContextProvider}>{children}</Provider>;
}


export default CartContextProvider;