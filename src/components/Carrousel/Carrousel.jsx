import imagen1 from "./imagenes_carrousel/carrousel_1.jpg";
import imagen2 from "./imagenes_carrousel/carrousel_2.jpg";
import imagen3 from "./imagenes_carrousel/carrousel_3.jpg";
import imagen4 from "./imagenes_carrousel/carrousel_4.jpg";
import imagen5 from "./imagenes_carrousel/carrousel_5.jpg";
import "./carrousel.css";

const imagenesCarousel = [imagen1, imagen2, imagen3];

const Carrousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide border-bottom-instagram"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {imagenesCarousel.map((e, i) => (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={`${i}`}
            className={i === 0 ? "active" : ""}
            aria-current="true"
            aria-label={`Slide ${i + 1}`}
            key={`${i}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={imagen1}
            className="d-block w-100"
            alt="..."
            // style={{ height: "100%" }}
          />

          <div className="card-img-overlay container m-5 p-5">
            <span className="h2 bg-dark text-white m-3">Bienvenid@s 🤙</span>{" "}
            <br />
            <b className="h3 bg-warning m-5"> Que acelga? 🥑</b>
            <br />
            <b className="h6 bg-dark text-white m-3">
              {" "}
              ahre que eso no es una acelga
            </b>
          </div>
        </div>
        <div className="carousel-item">
          <img src={imagen4} className="d-block w-100" alt="..." />
          {/* <img src={imagen2} className="d-block w-100" alt="..." /> */}
        </div>
        <div className="carousel-item">
          <img
            src={imagen5}
            style={{ maxheight: "400px" }}
            className="d-block"
            alt="..."
          />
          {/* <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" style={{maxheight: "400px"}} className="d-block" alt="..." /> */}
          {/* <img src={imagen3} className="d-block w-100" alt="..." /> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous/Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next/Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
