import React, { createContext,useState,useEffect,useContext } from 'react'

const CartContext=createContext();
export const CartProvider = ({children})=>{
   const [cart,setCart]=useState([]);
   const [isloading,setIsloading]=useState(true);
   useEffect(() => {
      if(localStorage.getItem('cart')){
         setCart(JSON.parse(localStorage.getItem('cart')))
         setIsloading(false)
      }else{
         setCart([])
         setIsloading(false)
      }
   }, [])
return <CartContext.Provider value={{cart,isloading,setCart}}>
   {children}
</CartContext.Provider>
}
export const Cart=()=> useContext(CartContext);