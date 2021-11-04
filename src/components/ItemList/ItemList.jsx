// Aca iria un useMemo 
import React from "react"

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
              categoryId={categoryId}
              image={image}
              id={id}
              title={title}
              description={description}
              price={price}
            />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default React.memo(ItemList);
