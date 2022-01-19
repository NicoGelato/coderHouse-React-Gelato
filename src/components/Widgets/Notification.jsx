import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";

const Notification = ({ quantity, title, id }) => {
  const { undoAddToCart } = useCartContext();

  return (
    <>
      <span className="d-block m-1">
        {" "}
        {quantity === 1
          ? `Se agregó  ${quantity}  "${title}" al carrito`
          : `Se agregaron  ${quantity}  "${title}" al carrito`}
      </span>
      <span>
        <button
          className="btn btn-dark border-instagram me-2 mt-1 "
          onClick={() => {
            undoAddToCart(id, quantity);
          }}
        >
          <BsCartX style={{ fontSize: "0.9rem" }} /> Cancelar
        </button>
      </span>
      <Link to="/carrito">
        <button className="btn btn-dark border-instagram mt-1 ">
          <IoCartOutline style={{ fontSize: "1rem" }} /> Ir a ver!
        </button>
      </Link>
    </>
  );
};

export default Notification;
