import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../components/ItemDetail/ItemDetail";
import Loader from "../components/Loader/Loader";

import { getProductosById } from "../utils/getProductosById";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductosByIdData = async () => {
    const productos = await getProductosById(id);

    setProduct(productos);
  };

  useEffect(() => {
    getProductosByIdData();
  }, []);

  if (!product) {
    return (
<Loader></Loader>
    );
  } else {
    return (
      <div className="container-fluid pt-3">
        <ItemDetail item={product} />
      </div>
    );
  }
};

export default ItemDetailContainer;
