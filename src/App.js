import React from "react";
import { Route, Switch } from "react-router";
import "./assets/css/bulma/bulma.css";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 5000,
});

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Shop} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/product/:id" exact component={Product} />
    </Switch>
  );
}

export default App;
