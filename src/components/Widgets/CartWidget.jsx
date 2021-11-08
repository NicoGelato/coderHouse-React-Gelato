import {useCartContext} from "../../context/CartContext"
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {

  const { getTotalItems } = useCartContext(); 

  return (
    <span style={{ alignItems: "center" }}>
      {" "}
      <IoCartOutline style={{ color: "white", fontSize: "1.5rem" }} />{" "}
      {getTotalItems()}
    </span>
  );
};

export default CartWidget;
