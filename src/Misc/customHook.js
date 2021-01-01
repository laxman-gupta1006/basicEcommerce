import { useReducer } from "react";

function CartReducer(prevState, action) {
  switch (action.type) {
    case "ADD": {
      return [...prevState, action.Item];
    }
    case "REMOVE": {
      return prevState.filter((Itemid) => Itemid.id !== action.Item.id);
    }
    case "UPDATE": {
      let myarray = prevState;
      for (let i = 0; i < myarray.length; i++) {
        if (myarray[i] === action.Item) {
          myarray[i]["quantity"] = action.quantity;
          break;
        }
      }
      return myarray;
    }
    default:
       return prevState
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });
  localStorage.setItem(key, JSON.stringify(state));
  return [state, dispatch];
}

export function useCart(key = "cart") {
  return usePersistedReducer(CartReducer, [], key);
}
