import React from 'react'
import keyboard from '../../../Category/keyboard.jpg'
import headphones from '../../../Category/headphone.jpg'
import '../../../Styles/Category.css'

const Categorys=[
   {
     "id": "fgsa2142fa",
     "name": "Keyboards",
     "description": "Buy different keyboard from any brand available",
     "img":keyboard
   },
   {
     "id": "xasgy42fa",
     "name": "Headphones",
     "description": "Find best-fit for your ears",
     "img":headphones
   }
 ]

 const renderCategoryitems=()=>{
   return Categorys.map(category=>
   {
     return(
       <div className="categorys">
          <img src={category.img} className="catimg" alt={category.name}/>
          <h3>{category.name}</h3>
          <h5>{category.description}</h5>
       </div>
     )
   }
    )
 }
 

export const Category = () => {
   return (
      <div className="category">
{renderCategoryitems()}
    </div>
   )
}
