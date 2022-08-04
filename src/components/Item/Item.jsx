import { Link } from "react-router-dom";
import { agregarPuntoAlNumero } from "../../utils/frontend/agregarPuntoAlNumero";
import { removeLastLetter } from "../../utils/frontend/removeLastLetter";
import "./item.css";

const Item = ({ price, title, description, image, categoryId, id }) => {
  return (
    <article className="card m-0 p-0 blur text-white border-instagram parent">
      <div className="container p-2">
        <div className="row g-0">
          <h5 className="d-inline-block text-white p-1">
            {removeLastLetter(categoryId)}
          </h5>
          <section className="col-6 col-sm-12 containerItemImg">
            <div className="container-Img">
              <input type="checkbox" className="custom-checkbox" id={title} />
              <label htmlFor={title}>
                <img
                  src={`${image}`}
                  className="card-img w-100 "
                  style={{
                    height: "250px",

                    width: "250px",

                    objectFit: "cover",
                  }}
                  alt={`${description}`}
                />
              </label>
            </div>
          </section>
          <section className="col-6 col-sm-12 card-body p-0">
            <div className="row m-1">
              <dd className="col-12 p-2 text-center">
                <h5 className="d-block card-title text-limit-1 ">{`${title}`}</h5>
                <p className="card-text m-auto text-limit-2 ">{`${description}`}</p>
              </dd>
              <div className="col-12 m-auto">
                <div className="d-grid gap-2">
                  <h3 className="text-center border-1">
                    ARS$ {`${agregarPuntoAlNumero(price)}`}
                  </h3>
                  <Link
                    className="btn btn-dark w-auto text-center border-instagram"
                    to={`/productos/${id}`}
                  >
                    Ver más detalles
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Item;
