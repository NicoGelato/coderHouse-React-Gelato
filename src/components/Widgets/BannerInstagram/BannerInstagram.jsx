import { useState } from 'react';

// BannerInstagram

import { AiOutlineInstagram } from "react-icons/ai";

import './bannerInstagram.css'

const BannerInstagram = () => {

  const [view, setView] = useState('')


  const close = () => setView('d-none')

  return (
    <section
      className={`container-fluid instagram ${view}`}
      title="Visita nuestro Insta!"
    >
      {/* <button type="button" className="position-absolute btn btn-circle mt-1" onClick={close} title="Cerrar">
          <AiOutlineClose />
                            </button> */}
      <button
        type="button"
        className="position-absolute btn-close mt-2"
        onClick={close}
        title="Cerrar"
        aria-label="Close"
      />
      <div className="row">
        <a
          className="col-12 nav-link font-large fontBillabong text-center text-white bg-instagram word-spacing p-0"
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