import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";


const Msg = ({ quantity, title, id }) => {
    
    const { undoAddToCart } = useCartContext();

    return (
      <>
        <span className="d-block m-1">
          {" "}
          {quantity === 1
            ? `Se agregó  ${quantity}  "${title}" al carrito`
            : `Se agregaron  ${quantity}  "${title}" al carrito`}
        </span>
        <span className="hover-white">
          <button
            className="btn btn-dark border-instagram me-2 mt-1 hover-white"
            onClick={() => {
              undoAddToCart(id, quantity);
            }}
          >
            <BsCartX className="hover-white" style={{ fontSize: "0.9rem" }} />{" "}
            Cancelar
          </button>
        </span>
        <Link to="/Carrito" className="hover-white">
          <button className="btn btn-dark border-instagram mt-1 ">
            <IoCartOutline
              className="hover-white"
              style={{ fontSize: "1rem" }}
            />{" "}
            Ir a ver!
          </button>
        </Link>
      </>
    );
};

export default Msg