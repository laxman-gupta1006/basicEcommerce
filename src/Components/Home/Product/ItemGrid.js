import React, { useEffect, useState } from "react";
import { useCart } from "../../../Misc/customHook";
import { Cart } from "../../../Misc/Cart.Context";
import { ItemCard } from "./ItemCard";
import { Alert } from "rsuite";
import { useParams } from "react-router";

const items = [
  {
    id: "1a",
    name: "Ducky One 2",
    price: 100,
    currency: "USD",
    delivery: false,
    thumbnail:
      "https://mechanicalkeyboards.com/shop/images/products/large_DKME1961ST-USPDZZT1_10.jpg",
    inStock: true,
    categoryId: "fgsa2142fa",
  },
  {
    id: "2a",
    name: "Varmilo Sakura",
    price: 140,
    currency: "USD",
    delivery: true,
    thumbnail:
      "https://mechanicalkeyboards.com/shop/images/products/large_2790_SakuraTKL_1.jpg",
    inStock: true,
    categoryId: "fgsa2142fa",
  },
  {
    id: "3a",
    name: "MK Disco",
    price: 80,
    currency: "USD",
    delivery: true,
    thumbnail:
      "https://mechanicalkeyboards.com/shop/images/products/large_2017_Disco_White_Caps_1.png",
    inStock: false,
    categoryId: "fgsa2142fa",
  },
  {
    id: "4b",
    name: "Razer Kraken",
    price: 60,
    currency: "USD",
    delivery: false,
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/71BKQhFzDmL._AC_SY355_.jpg",
    inStock: false,
    categoryId: "xasgy42fa",
  },
  {
    id: "5b",
    name: "HyperX Cloud II",
    price: 115,
    currency: "USD",
    delivery: false,
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/719KtJ-RAFL._AC_SL1417_.jpg",
    inStock: true,
    categoryId: "xasgy42fa",
  },
  {
    id: "6b",
    name: "Sennheiser PC 3 Chat",
    price: 60,
    currency: "USD",
    delivery: false,
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/61kIoNSe3VL._SL1500_.jpg",
    inStock: true,
    categoryId: "xasgy42fa",
  },
];

export const ItemGrid = ({filterinstock,filterdelivery}) => {
   const {setCart}=Cart();
  const [cart, dispatchCart] = useCart();
  const {categoryId}=useParams();
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    let productsFilter=items.filter(item=>item.categoryId===categoryId);
    if(filterinstock){
      productsFilter=productsFilter.filter(item=>item.inStock===true)
    }
    if(filterdelivery){
      productsFilter=productsFilter.filter(item=>item.delivery===true)
    }
    setProducts(productsFilter)
  },[categoryId,filterdelivery,filterinstock])

  const renderItems = () => {
    if(products.length===0){
      return <div className="d-flex justify-content-center align-items-center"><h6> Not found !</h6></div>
    }
    return products.map((item) => {
      const onCartClick = () => {
        if(!item.inStock){
          Alert.info("Item is out of stock",4000)
          return
        }
        const isAdded = cart.includes(item);
        item["quantity"]=1;
        if (isAdded) {
          dispatchCart({ type: "REMOVE",Item: item});
          setTimeout(()=>{
            setCart(JSON.parse(localStorage.getItem('cart')))
          },100)
          
        } else {
          dispatchCart({ type: "ADD",Item: item });
          setTimeout(()=>{
            setCart(JSON.parse(localStorage.getItem('cart')))
          },100)
        }
       
      };
      return <ItemCard
        id={item.id}
        name={item.name}
        price={item.price}
        currency={item.currency}
        delivery={item.delivery}
        thumbnail={item.thumbnail}
        inStock={item.inStock}
        categoryId={item.categoryId}
        onCartClick={() => onCartClick}
        key={item.id}
      />;
    });
  };
  return <div className="items">{renderItems()}</div>;
};
