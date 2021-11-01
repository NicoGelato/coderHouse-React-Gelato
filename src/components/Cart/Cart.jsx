

const Cart = () => {

  const cart = [
    { title: "Title del cart", price: "$$$", cantidadProductos: 5 },
    { title: "Title 2 del cart", price: "$$$2", cantidadProductos: 10 },
  ];

  return (
    <div className="container mt-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre del producto</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Cantidad a comprar</th>
            <th scope="col">Total por producto</th>
          </tr>
        </thead>
        {cart.map((el) => (
          <tbody>
            <tr>
              <th scope="row">{el.title}</th>
              <td>$ {el.price}</td>
              <td>{el.cantidadProductos}</td>
              <td>Banca mostro, ya te hago la cuenta</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Cart;
/* < ul >
    { carrito.map(el => <li className="text-white">{el.title} precio unitario: $ {el.price} cantidad: {el.cantidadProductos} </li>) }
        </ul>*/
