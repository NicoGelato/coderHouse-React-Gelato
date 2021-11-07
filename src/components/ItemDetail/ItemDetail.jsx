import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../Widgets/ItemCount";

const ItemDetail = ({ item }) => {



  const { title, image, description, price, id } = item;
  
  const { addToCart } = useCartContext();


  const [quantity, setQuantity] = useState(1);


  const onAdd = (count) => {
    setQuantity(count);
  };




  return (
    <div className="card mb-3 bg-grey-50" style={{ maxwidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${image}`}
            className="img-fluid rounded-start"
            alt={`${title}`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{`${title}`}</h5>
            <p className="card-text">{`${description}`}</p>

            <ItemCount onAdd={onAdd} />
            <button
              className="blur border-white p-0 mx-1"
              onClick={()=>addToCart(title, quantity, id, price)}
            >
              Agregar Producto
            </button>
            <p className="card-text">
              <small className="text-muted">
                Precio x unidad: ${`${price}`}
              </small>
            </p>
          </div>
        </div>
      </div>
      <Link to="/carrito">
        {" "}
        <button>Terminar compra</button>{" "}
      </Link>
    </div>
  );
};

export default ItemDetail;
