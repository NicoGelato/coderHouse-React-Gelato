import { IoIosUndo } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import { agregarPuntoAlNumero } from "../../utils/frontend/agregarPuntoAlNumero";
import useItemCount from "../../hooks/useItemCount";
import Notification from "../Widgets/Notification";
import "./itemDetail.css";

const ItemDetail = ({ product }) => {
  const { title, image, description, price, id } = product;
  const { addToCart, getTotalProducts } = useCartContext();
  const { count: quantity, setCount, RenderItemCount } = useItemCount();

  const notify = () =>
    toast(<Notification quantity={quantity} id={id} title={title} />, {
      icon: "☠️",
      theme: "dark",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
    });

  // Tanto el talle disponible como los colores deberian venir de una base de datos

  const talles = ["S", "M", "L", "XL"];

  const colores = [
    { name: "RJ", colorClassName: "btn btn-danger mx-1" },
    { name: "AZ", colorClassName: "btn btn-primary mx-1" },
    { name: "BL", colorClassName: "btn btn-light mx-1" },
    { name: "NG", colorClassName: "btn btn-dark mx-1" },
    { name: "AM", colorClassName: "btn btn-warning mx-1" },
  ];

  return (
    <>
      <div
        className="card bg-transparent border-none text-white"
        style={{ maxwidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <section className="containerImgItemDetail">
              <input type="checkbox" id="imgItemDetail" />
              <label htmlFor="imgItemDetail">
              <div className="lightbox">
                <span style={{ backgroundImage: `url(${image})` }} />
              </div>
                <img
                  src={`${image}`}
                  className="img-fluid rounded mt-3"
                  alt={`Nombre: ${title} Descripción:${description}`}
                />
              </label>
            </section>
            <small className="bg-dark p-1 opacity-75">
              *Imagen ilustrativa
            </small>
          </div>
          <div className="col-md-7 ">
            <div className="card-body text-center">
              <div className="blur rounded mx-md-5">
                <h1 className="h1 card-title">{`${title}`}</h1>
                <p className="card-text bg-dark bg-opacity-75 p-2">{`${description}`}</p>
              </div>
              <div className="blur rounded pt-2 mt-3 mx-md-5">
                <p>Seleccionar Talle:</p>

                {talles.map((e) => (
                  <div className="d-inline" key={e}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="talles"
                      id={e}
                      autoComplete="off"
                    />
                    <label className="btn btn-secondary mx-1" htmlFor={e}>
                      {e}
                    </label>
                  </div>
                ))}
                <p className="mt-2">Seleccionar Color de la prenda:</p>
                {colores.map(({ name, colorClassName }) => (
                  <div className="d-inline" key={name}>
                    <input
                      type="radio"
                      className="btn-check"
                      name="colores"
                      id={name}
                      autoComplete="off"
                    />
                    <label className={colorClassName} htmlFor={name}>
                      {name}
                    </label>
                  </div>
                ))}
                <p className="mt-2">Seleccionar Cantidad:</p>
                <RenderItemCount className={"mb-3"} />
                <div className="bg-dark bg-opacity-75 my-2 py-2">
                  <p className="h6 card-text">
                    Precio por unidad: ARS$ {`${agregarPuntoAlNumero(price)}`}
                  </p>
                  <p className="d-inline-block h4 card-text">
                    Precio total: ARS${" "}
                    {`${agregarPuntoAlNumero(price * quantity)}`}
                  </p>
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-dark border-instagram"
                    onClick={() => {
                      notify();
                      addToCart(id, image, title, quantity, price, description);
                      setCount(1);
                    }}
                  >
                    Agregar Producto
                  </button>
                </div>
              </div>
              <ToastContainer
                toastClassName="bg-dark"
                progressClassName="bg-danger border-instagram"
              />

              <section className="text-center mt-4">
                <Link to="/productos">
                  <button className="btn btn-dark border-instagram mt-1 m-2">
                    Volver <IoIosUndo />
                  </button>
                </Link>
                {getTotalProducts() > 0 ? (
                  <Link to="/carrito">
                    <button className="btn btn-dark border-instagram m-2">
                      Terminar Compra{" "}
                      <IoCartOutline
                        style={{ color: "white", fontSize: "1rem" }}
                      />
                    </button>
                  </Link>
                ) : null}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
