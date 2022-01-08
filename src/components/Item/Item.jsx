import { Link } from "react-router-dom";

const Item = ({ price, title, description, image, categoryId, id }) => {
  return (
    <>
      <article className="card m-0 p-0 blur text-white border-instagram">
        <div className="container p-2">
          <div className="row g-0">
      <h5 className="text-white p-1">{`${categoryId.substring(0, categoryId.length-1)}`}</h5>
            <secction className="col-4 col-sm-12">
              {
                !image ?
                  (<div className="spinner-grow spinner-grow-sm text-light mx-1" role="status">
              <span className="visually-hidden">Cargando imagen...</span>
            </div>):(
                <img
                src={`${image}`}
                className="card-img w-100 "
                style={{
                  height: "100%",
                }}
                alt={`${description}`}
              />)}
            </secction>

            <secction className="col-8 col-sm-12 card-body p-0">
              <div className="row">
                <dd className="col-6 col-sm-12 p-2 text-center">
                  <h5 className="card-title text-limit-1 my-2 ">{`${title}`}</h5>
                  <p className="card-text text-limit-1 my-1">{`${description}`}</p>
                </dd>
                <div className="col-6 col-sm-12 m-auto">
                  <div className="d-grid gap-2">
                    <h3 className="text-center border-1">$ {`${price}`}</h3>
                    <Link
                      className="btn btn-dark w-auto text-center border-instagram"
                      to={`/productos/${id}`}
                    >
                      Ver más detalles
                    </Link>
                  </div>
                </div>
              </div>
            </secction>
          </div>
        </div>
      </article>
    </>
  );
};

export default Item;
