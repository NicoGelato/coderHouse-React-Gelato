import {useState} from "react"

import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {

  const [numero, setNumero] = useState(0)

  return (
    <span style={{ alignItems: "center" }}>
      {" "}
      <IoCartOutline style={{ color: "white", fontSize: "1.5rem" }} /> {numero}
    </span>
  );
};

export default CartWidget;
