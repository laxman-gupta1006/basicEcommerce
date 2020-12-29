import React from 'react'
import { Badge,Button} from 'rsuite'
import "./itemcard.css"
import cartadd from "../../../cartadd.png"
import cartadded from "../../../cartadded.png"
import { Cart } from '../../../Misc/Cart.Context'

export const ItemCard = ({id,name,price,currency,delivery,thumbnail,inStock,categoryId,onCartClick}) => {
   const {cart}=Cart();
   const isAdded = cart[id]!==undefined;
   return (
<div className="itemcard" key={id}>
   <div className="image">
      <img 
      src={thumbnail}
        className="productImage"
        alt="product" />
   </div>
   <div className="description">
      <div className="productname"><h5>{name}</h5></div>
      <div className="price"><Badge content={`${price} ${currency}`} className="badge" /></div>
      <div className="delivery">{delivery}</div>
      <div className="stock">{inStock && <p className="text-green">In stock</p>}{!inStock && <p className="text-red">Out of stock</p>}</div>
      <div className="buttons"><div></div><Button onClick={onCartClick()}><img src={isAdded? cartadded:cartadd} height="25px" alt="Add to cart"/></Button></div>
   </div>
</div>
   )
}
