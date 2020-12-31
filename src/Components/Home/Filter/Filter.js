import React from 'react'
import { Checkbox, CheckboxGroup} from 'rsuite'
import filter from '../../../filter.png'
import Slider from './Slider'

export const Filter = () => {
   return (
      <div className="filter">
         <h4><img src={filter} alt="filter" height="18px"/> Filter</h4>
      <CheckboxGroup
      name="checkboxList"
      // value={["A","B"]}
      onChange={()=>{}}
    >
      <Slider/>
      <Checkbox value="B">In stock</Checkbox>
      <Checkbox value="D">Delivery available</Checkbox>
    </CheckboxGroup>
    </div>
   )
}
