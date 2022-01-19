import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { AiTwotoneDelete, AiOutlineHeart } from "react-icons/ai";
import { agregarPuntoAlNumero } from "../../utils/frontend/agregarPuntoAlNumero";
import "./cart.css";

const Cart = () => {
  const { products, removeProduct, getTotalPrice, getTotalProducts } =
    useCartContext();

  if (!products || products.length === 0) {
    return (
      <div className="box pt-5">
        <div className="container blur p-2 border-instagram">
          <p className="h2 text-white text-center">
            Todavía no agregaste nada al carrito
          </p>
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link className="m-auto bottom-0 end-0" to="/productos">
              <button className="btn btn-dark border-instagram">
                Ver qué puedo agregar <AiOutlineHeart />
              </button>
            </Link>
          </div>
        </div>
        <span className="fs-1">☠️</span>
      </div>
    );
  } else {
    return (
      <article className="container">
        <div className="table mt-5 p-2 blur bg-dark bg-opacity-50">
          <table className="table text-white ">
            <thead>
              <tr>
                <th scope="col">Productos ({getTotalProducts()})</th>
              </tr>
            </thead>
            {products.map(
              (
                { id, title, price, quantity, image, categoryId, description }
              ) => {
                return (
                  <tbody key={id}>
                    <tr>
                      <th scope="row">
                        <section
                          className="card bg-dark bg-opacity-50 p-2 border-0 "
                          style={{ maxwidth: "540px" }}
                        >
                          <div className="row g-0">
                            <div className="col-md-3">
                              <img
                                className="img-fluid rounded-start"
                                src={`${image}`}
                                alt={`${categoryId} : ${title}`}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h4 className="card-title">{title}</h4>
                                <p className="card-text">{description}</p>
                                <p className="card-text">
                                  Cantidad: {quantity}
                                </p>
                                <p className="card-text">
                                  <small>
                                    Precio unitario: ARS${" "}
                                    {agregarPuntoAlNumero(price)}
                                  </small>
                                </p>
                                <p className="card-text">
                                  Total por producto: ARS${" "}
                                  {agregarPuntoAlNumero(quantity * price)}
                                </p>
                              </div>
                          <Link className="btn" to={`/productos/${id}`}>
                            <button className="btn btn-dark bg-dark border-instagram">
                              Agregar similar{" "}
                            </button>
                          </Link>
                            </div>
                            <div className="col-md-1 text-end trashCan">
                              <i>
                                <AiTwotoneDelete
                                  title="No comprar este producto"
                                  type="button"
                                  onClick={() => removeProduct(id)}
                                  style={{ fontSize: "1.8rem" }}
                                />
                              </i>
                            </div>
                          </div>
                        </section>
                      </th>
                    </tr>
                  </tbody>
                );
              }
            )}
          </table>
          <section className="border-0">
            <p className="d-inline  h5 text-white">
              TOTAL: ARS$ {agregarPuntoAlNumero(getTotalPrice())}
            </p>
          </section>
        </div>
        <div className="d-grid d-md-inline-block gap-2 mt-1 mb-3">
          <button className="btn  btn-dark border-instagram m-2" onClick={()=>alert("Aun no hemos agregado un metodo de pago ")}>
            COMPRAR
          </button>
          <Link className="btn" to="/productos">
            <button className="btn btn-dark bg-dark border-instagram">
              Agregar otro producto{" "}
            </button>
          </Link>
        </div>
      </article>
    );
  }
};

export default Cart;
