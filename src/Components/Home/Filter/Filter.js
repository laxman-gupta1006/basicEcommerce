import React from 'react'
import { Checkbox, CheckboxGroup } from 'rsuite'
import filter from '../../../filter.png'

export const Filter = () => {
   return (
      <div className="filter">
         <h5><img src={filter} alt="filter" height="18px"/> Filter</h5>
      <CheckboxGroup
      name="checkboxList"
      // value={["A","B"]}
      onChange={()=>{}}
    >
      <Checkbox value="A">Item A</Checkbox>
      <Checkbox value="B">Item B</Checkbox>
      <Checkbox value="C">Item C</Checkbox>
      <Checkbox value="D">Item D</Checkbox>
    </CheckboxGroup>
    </div>
   )
}
