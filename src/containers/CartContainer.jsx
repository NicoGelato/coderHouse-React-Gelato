import Cart from "../components/Cart/Cart";
import { useCartContext } from "../context/CartContext";

const CartContainer = () => {
  const { items } = useCartContext();

  return <Cart items={items} />;
};

export default CartContainer;
