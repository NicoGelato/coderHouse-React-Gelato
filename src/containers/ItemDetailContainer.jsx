import { useState } from "react";
import { useParams } from "react-router";

import {getProductoById} from "../utils/getProductoById"

import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([]);

  
  const { id } = useParams();

  console.log(id)
  console.log(getProductoById());
  
  return (
    <div className="container-fluid pt-3">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
