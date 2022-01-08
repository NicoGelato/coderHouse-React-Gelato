import { useState } from 'react';

import { AiOutlineInstagram, AiOutlineClose } from "react-icons/ai";


const BannerInstagram = () => {

  const [view, setView] = useState('')


  const close = () => setView('d-none')

  return (
    <section
      className={`container-fluid instagram ${view}`}
      title="Visita nuestro Insta!"
    >
        <button type="button" className="position-absolute btn btn-circle mt-1" onClick={close} title="Cerrar">
          <AiOutlineClose />
                            </button>
          {/* <AiOutlineClose className="position-absolute text-white mt-1" onClick={close}/>        
         */}
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