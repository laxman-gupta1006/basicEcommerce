import React from 'react'
import { Badge, Loader} from 'rsuite'
import './Navigation.css'
import cartimg from "../../carts.png"
import { Cart } from '../../Misc/Cart.Context'


export const Navigation = () => {
   const {cart,isloading}=Cart();
   if(isloading)
   {
      return <Loader center />
   }
   return (
      <div className="navigation">
         <div>
         <h3>EStore</h3>
         </div>
         <div className="cart">
            <button className="cartbutton">
            <img src={cartimg} alt="cart" className="carticon"/>
            <Badge content={cart.length} className="cartbadge"/>
            </button>
         </div>
      </div>
   )
}
