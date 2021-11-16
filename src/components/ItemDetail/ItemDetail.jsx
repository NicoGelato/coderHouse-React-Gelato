import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import useItemCount from "../../hooks/useItemCount";

const ItemDetail = ({ item }) => {

  const { title, image, description, price, id } = item;
  const { addToCart, getTotalProducts } = useCartContext();
  
  const {
    count: quantity,
    RenderItemCount,
  } = useItemCount()
  
  return (
    <>
    <div className="card mb-3 blur text-white" style={{ maxwidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <small className="text-muted">*Imagen meramente ilustrativa</small>
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
            <p className="h6 card-text">Precio x unidad: ${`${price}`}</p>
            <RenderItemCount />
            <p className="h4 card-text my-2">
              Precio total: ${`${price * quantity}`}
            </p>
            <button
              className="btn btn-dark border-instagram m-2"
              onClick={() => {
                addToCart(id, image, title, quantity, price);
              }}
            >
              Agregar Producto
            </button>
        </div>
          </div>
      </div>
    </div>
          <section className="text-end">
            <Link to="/productos">
              <button className="btn btn-dark border-instagram mt-1 m-2">
                Seguir Comprando
              </button>
            </Link>
            {getTotalProducts() > 0 ? (
              <Link to="/carrito">
                <button className="btn btn-dark border-instagram m-2">
                  Terminar Compra
                </button>
              </Link>
            ) : null}
          </section>
    </>
  );
};

export default ItemDetail;
