import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { AiTwotoneDelete, AiOutlineHeart } from "react-icons/ai";
import "./cart.css"

const Cart = () => {

  const { products, removeProduct, getTotalPrice, getTotalProducts } = useCartContext();

  console.log(products);

  if (!products || products.length === 0) {
    return (
      <>
        <div className="box pt-5">
          <p className="h2 text-white text-center">
            Todavía no agregaste nada al carrito
          </p>
          <Link
            className="position-absolute bottom-0 end-0"
            to="/productos"
          >
            <button className="btn btn-dark border-instagram m-2">
              Ver qué puedo agregar <AiOutlineHeart />
            </button>
          </Link>
          <span className="fs-1">☠️</span>
        </div>
      </>
    );
  } else {
    return (
      <article className="container">
        <div className="table mt-5 p-2 blur ">
          <table className="table text-white">
            <thead>
              <tr>
                {/* <th scope="col">Imagen</th> */}
                <th scope="col">Productos ({getTotalProducts()})</th>
                {/* <th scope="col">Precio unitario</th> */}
                {/* <th scope="col">Cantidad a comprar</th>
                <th scope="col">Total por producto</th>
                <th scope="col"></th> */}
              </tr>
            </thead>
            {products.map(
              (
                { id, title, price, quantity, image, categoryId, description },
                i
              ) => {
                return (
                  <tbody key={id}>
                    <tr>
                      <th scope="row">
                        <section
                          className="card bg-transparent border-0 mb-3"
                          style={{ maxwidth: "540px" }}
                        >
                          <div className="row g-0">
                            <div className="col-md-2">
                              <div className="containerImg">
                                <input type="checkbox" id={i} />
                                <label htmlFor={i}>
                                  <img
                                    className="img-fluid rounded-start"
                                    src={`${image}`}
                                    alt={`${categoryId} : ${title}`}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h4 className="card-title">{title}</h4>
                                <p className="card-text">{description}</p>
                                <p className="card-text">Cantidad: {quantity}</p>
                                <p className="card-text">
                                  <small >
                                    Precio unitario:$ {price}
                                  </small>
                                </p>
                                <p className="card-text">Total: ${quantity * price}</p>

                              </div>
                            </div>
                            <div className="col-md-1 trash"><AiTwotoneDelete
    className=""
                          title="No comprar este producto"
                          type="button"
                          onClick={() => removeProduct(id)}
                          style={{ color: "white", fontSize: "1.5rem" }}
                        /></div>
                          </div>
                        </section>
                        {/* 
                        <div className="containerImg">
                          <input type="checkbox" id={i} />
                          <label htmlFor={i}>
                            <img
                              src={`${image}`}
                              alt={`${categoryId} : ${title}`}
                            />
                          </label>
                        </div>
                      </th>
                      <th scope="row">{title}</th>
                      <th scope="row">$ {price} */}
                      </th>
                      {/* <th scope="row">{quantity}</th>
                      <th scope="row">$ {quantity * price}</th> */}
                      {/* <th scope="row">
                        <AiTwotoneDelete
                          title="No comprar este producto"
                          type="button"
                          onClick={() => removeProduct(id)}
                          style={{ color: "white", fontSize: "1.5rem" }}
                        />
                      </th> */}
                    </tr>
                  </tbody>
                );
              }
            )}
          </table>
          <section className="text-end border-0">
            <p className="h5 text-end text-white">TOTAL: ${getTotalPrice()}</p>
            <button className="btn btn-dark border-instagram">COMPRAR</button>
          </section>
        </div>

        <Link className="position-absolute bottom-0 end-0" to="/productos">
          <button className="btn btn-dark border-instagram m-2">
            Seguir comprando{" "}
          </button>
        </Link>
      </article>
    );
  }
};

export default Cart;
