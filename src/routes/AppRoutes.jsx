import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CartProvider } from "../context/CartContext";

import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import Cart from "../components/Cart/Cart"
import WellcomePage from "../components/Wellcome/WellcomePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />
        <Switch>
          <Route path="/Productos" exact component={ItemListContainer} />
          <Route path="/productos/:id" exact component={ItemDetailContainer} />
          <Route
            path="/Productos/Categoria/:categoryId"
            exact
            component={ItemListContainer}
          />
        </Switch>
        <Route path="/Carrito" exact component={Cart} />
      </CartProvider>
      <Route path="/" exact component={WellcomePage} />
    </BrowserRouter>
  );
};

export default AppRoutes;
