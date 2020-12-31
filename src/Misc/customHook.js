import {useReducer,useEffect} from 'react'
import { Cart } from './Cart.Context';


function CartReducer(prevState,action){
   switch(action.type){
      case 'ADD':{
         return [...prevState,action.Item.id]
      }
      case 'REMOVE':{
         return prevState.filter((Itemid)=>
            Itemid!==action.Item.id);
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
   },[state,key]);
   return [state,dispatch];
}

export function useCart(key='cart'){
   return usePersistedReducer(CartReducer,[],key)
}