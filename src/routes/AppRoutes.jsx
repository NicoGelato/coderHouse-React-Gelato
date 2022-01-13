import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CartProvider } from "../context/CartContext";

import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import Cart from "../components/Cart/Cart"
import BannerInstagram from "../components/Widgets/BannerInstagram/BannerInstagram";
import Carrousel from "../components/Carrousel/Carrousel";
import WhatsappWidget from "../components/Widgets/WhatsappWidget/WhatsappWidget";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <BannerInstagram />
      <CartProvider>
      <NavBar />
        <Switch>
          <Route path="/productos" exact component={ItemListContainer} />
          <Route path="/productos/:id" exact component={ItemDetailContainer} />
          <Route
            path="/productos/categoria/:categoryId"
            exact
            component={ItemListContainer}
          />
        </Switch>
        <Route path="/carrito" exact component={Cart} />
      </CartProvider>
        <Route path="/" exact component={Carrousel} />
      <WhatsappWidget />
    </BrowserRouter>
  );
};

export default AppRoutes;
