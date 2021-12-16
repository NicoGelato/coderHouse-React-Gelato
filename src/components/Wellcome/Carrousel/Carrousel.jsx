import imagen1 from "./imagenes_carousel/carousel_1.jpg"
import imagen2 from "./imagenes_carousel/carousel_2.jpg"
import imagen3 from "./imagenes_carousel/carousel_3.jpg"

const Carrousel = () => {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block w-100" alt="..." />

            <div className="card-img-overlay container m-5 p-5">
              <span className="h2 bg-dark text-white m-3">
                Bienvenid@s wachines 🤙
              </span>{" "}
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
            <img src={imagen2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block w-100" alt="..." />
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
}

export default Carrousel
