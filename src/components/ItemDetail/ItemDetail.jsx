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
      
      theme: "dark",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
    });

  // Tanto el talle disponible como los colores deberian venir de una base de datos
  
  const talles = ['S', 'M', 'L', 'XL'];

  const colores = [
    { name: 'RJ', colorClassName: 'btn btn-danger mx-1' },
    { name: 'AZ', colorClassName: 'btn btn-primary mx-1' },
    { name: 'BL', colorClassName: 'btn btn-light mx-1' },
    { name: 'NG', colorClassName: 'btn btn-dark mx-1' },
    { name: 'AM', colorClassName: 'btn btn-warning mx-1' },
  ]

  return (
    <>
      <div className="card mb-3 blur text-white" style={{ maxwidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <small>*Imagen ilustrativa</small>
            <img
              src={`${image}`}
              className="img-fluid rounded-start"
              alt={`Nombre: ${title} Descripción:${description}`}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h1 className="h1 card-title">{`${title}`}</h1>
              <p className="card-text">{`${description}`}</p>

              <p>Seleccionar Talle:</p>

              {
                talles.map((e,i)=> 
                ( 
             <div className="d-inline" key={i}>
             
             <input
                type="radio"
                className="btn-check"
                name="talles"
                id={e}
                autocomplete="off"
                      
              />
              <label className="btn btn-secondary mx-1" for={e}>
                {e}
              </label>
             </div>
                )
             
                )
              }
              <p>Seleccionar Color de la prenda:</p>
              {
                colores.map(({name, colorClassName}, i) =>
                             (<div className="d-inline" key={i}>
             
              <input
                type="radio"
                className="btn-check"
                name="colores"
                id={name}
                autocomplete="off"
              />
              <label className={colorClassName} for={name}>
                {name}
              </label>


                  

             </div>)
                
                )
}

             

              <RenderItemCount className="mt-5"/>
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
