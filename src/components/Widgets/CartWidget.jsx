<<<<<<< HEAD
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
=======

import { useCartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  const { getTotalProducts } = useCartContext();

>>>>>>> 4f4f3d21275ed56911fcda9caa590811b07ae0bf
  return (
    <div className="position-relative" style={{ alignItems: "center" }}>
      {" "}
<<<<<<< HEAD
      <IoCartOutline style={{ color: "white", fontSize: "1.5rem" }} /> 0
    </span>
=======
      <IoCartOutline style={{ color: "white", fontSize: "1.7rem" }} />{" "}
      {getTotalProducts() === 0 ? (
        <span
          style={{ fontSize: "0.73rem" }}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill "
        >
          {getTotalProducts()}
          <span class="visually-hidden"></span>
        </span>
      ) : (
        <span
          style={{ fontSize: "0.73rem", fontWeight: "bold" }}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  "
        >
          {getTotalProducts()}
          <span class="visually-hidden"></span>
        </span>
      )}
    </div>
>>>>>>> 4f4f3d21275ed56911fcda9caa590811b07ae0bf
  );
};

export default CartWidget;
