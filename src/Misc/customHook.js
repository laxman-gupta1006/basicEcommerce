import {useReducer,useEffect} from 'react'
import { Cart } from './Cart.Context';


function CartReducer(prevState,action){
   switch(action.type){
      case 'ADD':{
         let cartadd={...prevState}
         cartadd[action.Item.id]=action.Item
         return cartadd
      }
      case 'REMOVE':{
        delete prevState[action.Item.id]
        return prevState
         
      //    return prevState.filter((Itemid)=>
      //       Itemid.id!==action.Item.id);
      }
   }
}


function usePersistedReducer(reducer,initialState,key){
   
   const [state,dispatch]=useReducer(reducer,initialState,(initial)=>{
      const persisted = localStorage.getItem(key)
      return persisted ? JSON.parse(persisted):initial;
   })

   useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(state));
      console.log(state)
   },[state,key]);
   return [state,dispatch];
}

export function useCart(key='cart'){
   return usePersistedReducer(CartReducer,[],key)
}