import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import "./bannerInstagram.css";

const BannerInstagram = () => {
  const [view, setView] = useState("");

  const close = () => setView("d-none");

  return (
    <section
      className={`position-relative container-fluid instagram ${view}`}
      title="Visita nuestro Insta!"
    >
      <button
        type="button"
        className="position-absolute mt-2 btn-close"
        onClick={close}
        title="Cerrar"
        aria-label="Close"
      />
      <div className="row">
        <a
          className="col-12 nav-link font-large fontBillabong text-center text-white bg-instagram word-spacing p-0 pt-1"
          href="https://www.instagram.com/indumentarialeeds/"
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
