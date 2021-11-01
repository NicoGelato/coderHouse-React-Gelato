import { AiOutlineInstagram } from "react-icons/ai";

const BannerInstagram = ({ linkInstagram }) => {
  return (
    <section
      className="container-fluid instagram"
      title="Visita nuestro Insta!"
    >
      <div className="row">
        <a
          className="col-12 nav-link font-large fontBillabong text-center text-white bg-instagram word-spacing p-0"
          href={linkInstagram}
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