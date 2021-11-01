// Componente padre: ItemList

import { Link } from "react-router-dom";


const Item = ({ precio, nombre, descripcion, imagenURL, category, id }) => {
  return (
    <>
      <h5 className="text-white p-1">{`${category}`}</h5>
      <div className="card m-0 p-0 ">
        <div className="container p-2">
          <div className="row g-0">
            <div className="col-4 col-sm-12">
              <img
                src={`${imagenURL}`}
                className="card-img w-100 "
                style={{
                  height: "100%",
                }}
                alt="..."
              />
            </div>

            <div className="col-8 col-sm-12 card-body p-0">
              <div className="row">
                <div className="col-6 col-sm-12 p-2 text-center">
                  <h5 className="card-title blur text-limit-1 my-2 ">{`${nombre}`}</h5>
                  <p className="card-text text-limit-1 my-1">{`${descripcion}`}</p>
                </div>
                <div className="col-6 col-sm-12 m-auto">
                  <div className="d-grid gap-2">
                    <h3 className="text-center border-1 blur">
                      $ {`${precio}`}
                    </h3>
                    <Link
                      className="btn btn-dark w-auto text-center border-white"
                      to={`/productos/${id}`}
                    >
                      Más detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
