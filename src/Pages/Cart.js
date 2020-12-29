import React from 'react'
import { Cart } from '../Misc/Cart.Context';

export const CartView = () => {
   const {cart}=Cart();
   return (
<div>
   {
      cart.map(item=>{
         return <p>{item}</p>
      })
   }
</div>
   )
}
