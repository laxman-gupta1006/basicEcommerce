import React from "react";
import { Container, Content, Footer, Header } from "rsuite";
import { Category } from "../Components/Home/Category/Category";
import { Filter } from "../Components/Home/Filter/Filter";
import { Navigation } from "../Components/Navigation/Navigation";
import "../Styles/Home.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { CartProvider } from "../Misc/Cart.Context";
import { ItemGrid } from "../Components/Home/Product/ItemGrid";
import {CartView} from "../Pages/Cart"

export const Home = () => 

{
  return (
    <Container>
      <CartProvider>
      <Header>
        <Navigation />
      </Header>
      <Content>
        {/* <div className="top">
   <Category/>
<Search/>
</div> */}<BrowserRouter>
          <Switch>
             
            <Route exact path="/category/:category">
              <div className="container">
                <Filter />
                <ItemGrid/>
              </div>
            </Route>
            <Route exact path="/cart">
              <div className="container">
                <CartView />
              </div>
            </Route>
            <Route>
              <Category />
            </Route>

           
          </Switch>
          </BrowserRouter>
      </Content>
      <Footer>
        <div className="d-flex justify-content-center align-items-center">
          EStore
        </div>
      </Footer>
      </CartProvider>
    </Container>
  );
};
