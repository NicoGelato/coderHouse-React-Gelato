import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <span style={{ alignItems: "center" }}>
      {" "}
      <IoCartOutline style={{ color: "white", fontSize: "1.5rem" }} /> 0
    </span>
  );
};

export default CartWidget;
