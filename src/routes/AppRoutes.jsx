// Padre: App

// Librerias
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Componetes hijo
import NavBar from "../components/NavBar/NavBar";
import WellcomePage from "../components/Wellcome/WellcomePage";
import Cart from "../components/Cart/Cart";

// Containers
import ItemListContainer from "../containers/ItemListContainer"
import ItemDetailContainer from "../containers/ItemDetailContainer";

const AppRoutes = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/productos" exact component={ItemListContainer} />
          <Route path="/productos/:id" exact component={ItemDetailContainer} />
          <Route path="/Carrito" exact component={Cart} />
          <Route path="/" exact component={WellcomePage} />
        </Switch>
      </BrowserRouter>
    );
};

export default AppRoutes;