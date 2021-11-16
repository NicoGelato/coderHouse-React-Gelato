import { AiOutlineInstagram } from "react-icons/ai";

const BannerInstagram = () => {
  return (
    <section
      className="container-fluid instagram sticky-top-2"
      title="Visita nuestro Insta!"
    >
      <div className="row">
        <a
          className="col-12 nav-link font-large fontBillabong text-center text-white bg-instagram word-spacing p-0"
          href="https://www.instagram.com/indumentarialeeds"
          rel="noreferrer"
          target="_blank"
        >
          Seguinos en Instragram <AiOutlineInstagram />{" "}
        </a>
      </div>
    </section>
  );
};

export default BannerInstagram;