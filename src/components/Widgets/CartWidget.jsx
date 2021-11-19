
import { useCartContext } from "../../context/CartContext";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  const { getTotalProducts } = useCartContext();

  return (
    <div className="position-relative" style={{ alignItems: "center" }}>
      {" "}
      <IoCartOutline style={{ color: "white", fontSize: "1.7rem" }} />{" "}
      {getTotalProducts() === 0 ? (
        <span
          style={{ fontSize: "0.9rem" }}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill mx-2"
        >
          {getTotalProducts()}
          <span class="visually-hidden"></span>
        </span>
      ) : (
        <span
          style={{ fontSize: "0.8rem" }}
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mx-2 "
        >
          {getTotalProducts()}
          <span class="visually-hidden"></span>
        </span>
      )}
    </div>
  );
};

export default CartWidget;
