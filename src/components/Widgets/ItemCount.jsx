// Componete Padre: Item
import { useState } from "react";

// Iconos + y -
import { AiOutlinePlus } from "react-icons/ai";

import { AiOutlineMinus } from "react-icons/ai";
 

const ItemCount = ({onAdd}) => {

const [count, setCount] = useState(1);

  onAdd(count);
  
  const onRestar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  
  const onSumar = () => {
    setCount(count + 1);
  }


  return (
    <>
      <div className="btn-wrapper">
        <button className="blur  mx-2" onClick={onRestar}>
          <AiOutlineMinus />
        </button>
        <span className="border px-5 py-1">{count}</span>
        <button className="blur mx-2" onClick={onSumar}>
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );

};

export default ItemCount;


