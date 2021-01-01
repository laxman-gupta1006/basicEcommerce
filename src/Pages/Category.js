import React, { useState } from 'react'
import { Filter } from '../Components/Home/Filter/Filter'
import { ItemGrid } from '../Components/Home/Product/ItemGrid'


export const Category = () => {
  const [filterinstock,setFilterinstock]=useState(false);
  const [filterdelivery,setdelivery]=useState(false);
   return (
    <div className="container">
    <Filter setFilterinstock={setFilterinstock} setdelivery={setdelivery}/>
    <ItemGrid filterinstock={filterinstock} filterdelivery={filterdelivery}/>
  </div>
   )
}
