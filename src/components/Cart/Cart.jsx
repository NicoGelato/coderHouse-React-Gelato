import { useCartContext } from "../../context/CartContext";
import {AiTwotoneDelete} from "react-icons/ai";

const Cart = () => {
  const { items, removeItem } = useCartContext();

  return (
    <div className="container mt-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Cantidad a comprar</th>
            <th scope="col">Total por producto</th>
          </tr>
        </thead>
        {items.map((el) => (
          <tbody key={el.id}>
            <tr>
              <th scope="row">{el.title}</th>
              <td>$ {el.price}</td>
              <td>{el.quantity}</td>
              <td>$ {el.quantity * el.price}</td>
            <button onClick={() => removeItem(el.id)}>
              <AiTwotoneDelete style={{ color: "white", fontSize: "1.5rem" }} />
            </button>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
