import React from 'react'
import filter from '../../../filter.png'

export const Filter = ({setFilterinstock,setdelivery}) => {
   return (
      <div className="filter">
         <h4><img src={filter} alt="filter" height="18px"/> Filter</h4>
      <input type="checkbox" onChange={(e)=>setFilterinstock(e.target.checked)}/><label> In Stock</label><br/>
      <input type="checkbox" onChange={(e)=>setdelivery(e.target.checked)}/><label> Delivery available</label>
    </div>
   )
}
