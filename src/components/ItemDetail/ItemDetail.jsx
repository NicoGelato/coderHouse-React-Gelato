import { IoIosUndo } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import useItemCount from "../../hooks/useItemCount";
import Msg from "../Widgets/Notifications";


const ItemDetail = ({ item }) => {

  const { title, image, description, price, id } = item;
  const { addToCart, getTotalProducts } = useCartContext();
  
  const {
    count: quantity,
    setCount,
    RenderItemCount,
  } = useItemCount();

  const notify = () =>
    toast(<Msg quantity={quantity} id={id} title={title}  />, {
      icon: "☠️",
      className: "border-instagram",
      theme: "dark",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
    });

  return (
    <>
      <div className="card mb-3 blur text-white" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <small className="text-muted">*Imagen ilustrativa</small>
            <img
              src={`${image}`}
              className="img-fluid rounded-start"
              alt={`${title}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h1 className="h1 card-title">{`${title}`}</h1>
              <p className="card-text">{`${description}`}</p>

              <p>Seleccionar Talle:</p>
              <input
                type="radio"
                className="btn-check"
                name="talles"
                id="S"
                autocomplete="off"
              />
              <label className="btn btn-secondary mx-1" for="S">
                S
              </label>

              <input
                type="radio"
                className="btn-check"
                name="talles"
                id="M"
                autocomplete="off"
              />
              <label className="btn btn-secondary mx-1" for="M">
                M
              </label>

              <input
                type="radio"
                className="btn-check"
                name="talles"
                id="L"
                autocomplete="off"
              />
              <label className="btn btn-secondary mx-1" for="L">
                L
              </label>

              <input
                type="radio"
                className="btn-check"
                name="talles"
                id="XL"
                autocomplete="off"
              />
              <label className="btn btn-secondary mx-1" for="XL">
                XL
              </label>
              <p>Seleccionar Color de la prenda:</p>

              <input
                type="radio"
                className="btn-check"
                name="colores"
                id="rojo"
                autocomplete="off"
              />
              <label className="btn btn-danger mx-1" for="rojo">
                RJ
              </label>

              <input
                type="radio"
                className="btn-check"
                name="colores"
                id="azul"
                autocomplete="off"
              />
              <label className="btn btn-primary mx-1" for="azul">
                AZ
              </label>

              <input
                type="radio"
                className="btn-check"
                name="colores"
                id="blanco"
                autocomplete="off"
              />
              <label className="btn btn-light mx-1" for="blanco">
                BL
              </label>

              <input
                type="radio"
                className="btn-check"
                name="colores"
                id="negro"
                autocomplete="off"
              />
              <label className="btn btn-dark mx-1" for="negro">
                NG
              </label>

              <input
                type="radio"
                className="btn-check"
                name="colores"
                id="amarillo"
                autocomplete="off"
              />
              <label className="btn btn-warning mx-1" for="amarillo">
                AM
              </label>

              <RenderItemCount />
              <p className="h4 card-text my-2">
                Precio total: ${`${price * quantity}`}
              </p>
              <p className="h6 card-text">Precio x unidad: ${`${price}`}</p>
              <button
                className="btn btn-dark border-instagram m-2"
                onClick={() => {
                  notify();
                  addToCart(id, image, title, quantity, price);
                  setCount(1);
                }}
              >
                Agregar Producto
              </button>
              <ToastContainer progressClassName="bg-secondary border-instagram" />
            </div>
          </div>
        </div>
      </div>
      <section className="text-end">
        <Link to="/productos">
          <button className="btn btn-dark border-instagram mt-1 m-2">
            Volver <IoIosUndo />
          </button>
        </Link>
        {getTotalProducts() > 0 ? (
          <Link to="/carrito">
            <button className="btn btn-dark border-instagram m-2">
              Terminar Compra{" "}
              <IoCartOutline style={{ color: "white", fontSize: "1rem" }} />
            </button>
          </Link>
        ) : null}
      </section>
    </>
  );
};

export default ItemDetail;
