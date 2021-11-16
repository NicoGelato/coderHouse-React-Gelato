import { useCartContext } from "../../context/CartContext";
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  const { products, removeProduct, getTotalPrice } = useCartContext();

  if (products.length === 0) {
    return (
      <div className="">
        <div class="box mt-5">
          <span class="fs-1">☠️</span>
          <p className="h2 text-white text-center">
            Todavía no agregaste nada al carrito
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 blur">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre del producto</th>
              <th scope="col">Precio unitario</th>
              <th scope="col">Cantidad a comprar</th>
              <th scope="col">Total por producto</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {products.map(({ id, title, price, quantity, image }) => (
            <tbody key={id}>
              <tr>
                <th>
                  <img
                    src={`${image}`}
                    alt="coso de la imagen de tu compra"
                    style={{ height: "70px" }}
                  />
                </th>
                <th scope="row">{title}</th>

                <td>$ {price}</td>
                <td>{quantity}</td>
                <td>$ {quantity * price}</td>
                <td>
                  <AiTwotoneDelete
                    type="button"
                    onClick={() => removeProduct(id)}
                    style={{ color: "white", fontSize: "1.5rem" }}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <section className="text-end">
          <p className="h5 text-end text-white">TOTAL: ${getTotalPrice()}</p>
          <button className="btn btn-dark border-instagram">COMPRAR</button>
        </section>
      </div>
    );
  }
};

export default Cart;
