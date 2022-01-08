import { AiOutlineWhatsApp } from "react-icons/ai";
import "./whatsappWidget.css";

const WhatsappWidget = () => {
    
    return (
        // <a className="btn-wsp" href="https://wa.link/ai3nsh" target="_blank" rel="noreferrer" title="Mandanos tu consulta!">

        //     <i><i/>

        // </a>
              <a className="btn-wsp" href="https://wa.link/ai3nsh" target="_blank" rel="noreferrer" title="Mandanos tu consulta!">
        <AiOutlineWhatsApp className="mb-4" aria-hidden="true" draggable="true"/>
      </a>
    )
}

export default WhatsappWidget;