import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../components/ItemDetail/ItemDetail";

import { getProductoById } from "../utils/getProductoById";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

const getProductoByIdData = async () => {
    const productos = await getProductoById(id);
    setProduct(productos)
    
  } 

  useEffect(() => {
    getProductoByIdData()
  }, []);

  return (
    <div className="container-fluid pt-3">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
