// Componete Padre: Item
import { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; 

const ItemCount = ({onAdd}) => {

const [resultadoItemCount, setResultadoItemCount] = useState(0);

  onAdd(resultadoItemCount);
  
  const onRestar = () => {
    if (resultadoItemCount > 0) {
      setResultadoItemCount(resultadoItemCount - 1);
    }
  }
  
  const onSumar = () => {
    setResultadoItemCount(resultadoItemCount + 1);
  }


  return (
    <>
      <div className="btn-wrapper">
        <button className="blur  mx-2" onClick={onRestar}>
          <AiOutlineMinus />
        </button>
        <span className="border px-5 py-1">{resultadoItemCount}</span>
        <button className="blur mx-2" onClick={onSumar}>
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );

};

export default ItemCount;
