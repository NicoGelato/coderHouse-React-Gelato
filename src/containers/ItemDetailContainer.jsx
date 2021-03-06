import { useEffect, useState } from "react";
import { useParams } from "react-router";

import ItemDetail from "../components/ItemDetail/ItemDetail";
import Loader from "../components/Loader/Loader";

import { getProductosById } from "../utils/backend/getProductosById";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductosByIdData = async (id) => {
    const productos = await getProductosById(id);

    setProduct(productos);
  };

  useEffect(() => {
    getProductosByIdData(id);
  }, [id]);

  if (!product) {
    return <Loader />;
  } else {
    return (
      <div className="container-fluid pt-3">
        <ItemDetail product={product} />
      </div>
    );
  }
};

export default ItemDetailContainer;
