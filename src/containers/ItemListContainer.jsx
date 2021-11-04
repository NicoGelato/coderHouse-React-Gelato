import ItemList from "../components/ItemList/ItemList";

import { useItemContext } from "../context/ItemContext";

const ItemListContainer = () => {
  const context = useItemContext();

  const { productos } = context;

  console.log(productos);

  // Nota para el nico del futuro Que tal si hago si  !productos else{mostrar la lista}

  if (productos.length > 0) {
    return (
      <div className="container pt-3">
        <ItemList productos={productos} />
      </div>
    );
  } else {
    return (
      <div className="bg-dark p-2 pt-3 opacity-75">
        <h1 className="text-center text-white h3">
          ☠️ Cargando productos... ☠️
        </h1>
        <div className="d-flex justify-content-center m-5">
          <div
            className="spinner-grow spinner-grow-sm text-light mx-1"
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemListContainer;
