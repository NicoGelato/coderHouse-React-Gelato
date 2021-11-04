import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../components/ItemDetail/ItemDetail";

import { getProductosById } from "../utils/getProductosById";

const ItemDetailContainer = () => {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  
  const getProductosByIdData = async () => {
    const productos = await getProductosById(id);
    
    console.log(productos);
      setProduct(productos)
      
    } 
  useEffect(() => {
    getProductosByIdData()
  }, []);

  return (
    <div className="container-fluid pt-3">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
