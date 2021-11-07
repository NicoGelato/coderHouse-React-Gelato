import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ItemContextProvider } from "../context/ItemContext";
import { CartProvider } from "../context/CartContext";

import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import CartContainer from "../containers/CartContainer";
import WellcomePage from "../components/Wellcome/WellcomePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <CartProvider>
      <ItemContextProvider>
        <Switch>
          <Route path="/Productos" exact component={ItemListContainer} />
          <Route
            path="/Productos/categoria/:categoryId"
            exact
            component={ItemListContainer}
          />
        </Switch>
        <Route path="/Productos/:id" exact component={ItemDetailContainer} />
      </ItemContextProvider>
        <Route path="/Carrito" exact component={CartContainer} />
      </CartProvider>
      <Route path="/" exact component={WellcomePage} />
    </BrowserRouter>
  );
};

export default AppRoutes;
