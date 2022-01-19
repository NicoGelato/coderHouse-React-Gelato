import final1 from "./imagenes_carrousel/final1.jpg";
import final2 from "./imagenes_carrousel/final2.jpg";
import final3 from "./imagenes_carrousel/final3.jpg";

import "./carrousel.css";

const imagenesCarousel = [
  { src: final1, key: "chicaVinilo" },
  { src: final2, key: "chicoFondoNegro" },
  { src: final3, key: "chicaFondoDePiedra" },
];

const Carrousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide border-bottom-instagram"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {imagenesCarousel.map(({ src, key }, i) => (
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={`${i}`}
            className={i === 0 ? "active" : " "}
            aria-current="true"
            aria-label={`Slide ${i + 1}`}
            key={`${key}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={final1} className="d-block w-100" alt="..." />

          <div className="card-img-overlay container m-auto p-5">
            <span className="h2 bg-dark text-white m-3">
              {" "}
              👋 Bienvenid@s! {" "}
            </span>{" "}
            <br />
            <b className="h3 bg-warning m-5">   </b>
            <br />
            <b className="h6 bg-dark text-white m-3">
              {" "}
              
            </b>
          </div>
        </div>
        <div className="carousel-item">
          <img src={final2} className="d-block w-100" alt="..." />
          {/* <img src={imagen2} className="d-block w-100" alt="..." /> */}
        </div>
        <div className="carousel-item">
          <img
            src={final3}
            // style={{ maxheight: "400px" }}
            className="d-block w-100"
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
