// Aca iria un useMemo 

import Item from "../Item/Item";

const ItemList = ({ productos }) => {

  return (
    <div className="row rounded-3 p-1">
      {productos.map((element, index) => {
        const { image, title, description, price, categoryId, id } = element;

        return (
          <div
            className="col-12 col-md-6 col-lg-3 p-3"
            key={`productoN${index}`}
          >
            <Item
              category={categoryId}
              imagenURL={image}
              id={id}
              nombre={title}
              descripcion={description}
              precio={price}
            />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default ItemList;
