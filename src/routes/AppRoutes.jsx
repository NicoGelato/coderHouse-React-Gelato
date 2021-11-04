// Padre: App

// Librerias
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Componetes hijo
import NavBar from "../components/NavBar/NavBar";
import WellcomePage from "../components/Wellcome/WellcomePage";
import Cart from "../components/Cart/Cart";

import { ProviderItemContext } from "../context/ItemContext";

// Containers
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <ProviderItemContext>
        <Switch>
          <Route path="/Productos" exact component={ItemListContainer} />

          <Route path="/Productos/:id" exact component={ItemDetailContainer} />

          <Route
            path="/Productos/categoria/:categoryId"
            exact
            component={ItemListContainer}
          />

          <Route path="/Carrito" exact component={Cart} />
          <Route path="/" exact component={WellcomePage} />
        </Switch>
      </ProviderItemContext>
    </BrowserRouter>
  );
};

export default AppRoutes;
