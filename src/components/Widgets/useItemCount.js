import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const useItemCount = () => {
  const [count, setCount] = useState(1);

  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onIncrement = () => {
    setCount(count + 1);
  };

  const RenderItemCount = () => (
    <>
      <div className="btn-wrapper">
        <button className="blur  mx-2" onClick={onDecrement}>
          <AiOutlineMinus />
        </button>
        <span className="border px-5 py-1">{count}</span>
        <button className="blur mx-2" onClick={onIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );

  return {
    count,
    RenderItemCount,
  };
};

export default useItemCount;
