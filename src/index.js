import React from "react";
import ReactDOM from "react-dom";
import { Container, Content } from "rsuite";
import { Category } from "./Pages/Category";
import { Navigation } from "./Components/Navigation/Navigation";
import "./Styles/Home.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from "./Misc/Cart.Context";
import { CartView } from "./Pages/Cart";
import "rsuite/dist/styles/rsuite-default.css";
import { Home } from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Content>
        <BrowserRouter>
         
            <CartProvider>
            <Switch>
              <Route exact path="/category/:categoryId">
                <Navigation />
                <Category />
              </Route>
              <Route exact path="/cart">
                <Navigation />
                <CartView />
              </Route>
              <Route exact path="/">
                <Navigation />
                <Home />
              </Route>
              <Route>
              <div className="d-flex justify-content-center align-items-center">
                <h4>404 Not found!</h4>
              </div>
              </Route>
              </Switch>
            </CartProvider>
          
        </BrowserRouter>
      </Content>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
