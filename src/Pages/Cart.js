import React from "react";
import { Button, Icon, InputNumber } from "rsuite";
import { Cart } from "../Misc/Cart.Context";
import { useCart } from "../Misc/customHook";
import "../Styles/Cart.css";

export const CartView = () => {
  const { setCart } = Cart();
  let price = 0;
  const [cart, dispatchCart] = useCart();
  if (cart.length === 0) {
    return (
      <div className="cartbox">
        <h6>Your cart is empty.</h6>
      </div>
    );
  }
  return (
   <div className="container">
      <div className="cartbox">
        <table width="80%" cellPadding="10px" className="carttable">
           <tbody>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
          </tr>
          {cart.map((item) => {
            const onRemove = () => {
              dispatchCart({ type: "REMOVE", Item: item });
              setTimeout(() => {
                setCart(JSON.parse(localStorage.getItem("cart")));
              }, 100);
            };
            const updateQuantity = (e) => {
             if(e==0){
               dispatchCart({ type: "REMOVE", Item: item });
             }else
             { dispatchCart({ type: "UPDATE", quantity: e, Item: item });}
              setTimeout(() => {
                setCart(JSON.parse(localStorage.getItem("cart")));
              }, 100);
            };
            price = price + item.price * item.quantity;
            return (
              <tr key={item.id}>
                <td>
                  <div className="cartitem">
                    <img src={item.thumbnail} height="80px" alt={item.name}/>
                    <div className="productdes">
                      <h6>{item.name}</h6>
                    </div>
                  </div>
                </td>
                <td>{`${item.price} ${item.currency}`}</td>
                <td>
                  <InputNumber
                    defaultValue={item.quantity}
                    max={100}
                    min={0}
                    onChange={(e) => updateQuantity(e)}
                  />
                </td>
                <td>{`${item.price * item.quantity} USD`}</td>
                <td>
                  <Button onClick={onRemove}>
                    <Icon icon="close" />
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <th> </th>
            <th></th>
            <th>Billing amount</th>
            <th>{`${price} USD`}</th>
          </tr>
          </tbody>
        </table>
        <Button color="blue">Proceed</Button>
      </div>
    </div>
  );
};
