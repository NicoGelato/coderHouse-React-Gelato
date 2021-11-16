import {useCartContext} from "../../context/CartContext"
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {

  const { getTotalProducts } = useCartContext(); 

  return (
    <div style={{ alignItems: "center" }}>
      {" "}
      <IoCartOutline style={{ color: "white", fontSize: "1.5rem" }} />{" "}
      <span>{getTotalProducts()}</span>
    </div>
  );
};

export default CartWidget;
