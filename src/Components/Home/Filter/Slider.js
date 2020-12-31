import React, { useState } from 'react'
import {  InputGroup, InputNumber, RangeSlider } from 'rsuite'

const Slider=()=>{
   const [value, setValue] = useState([0, 500]);
   return(
   <div className="rangeslider">
      <h6>Price Range</h6>
      <br/>
   <InputGroup>
     <InputNumber
       min={0}
       max={5000}
       value={value[0]}
       onChange={nextValue => {
         const [start, end] = value;
         if (nextValue > end) {
           return;
         }
         setValue([nextValue, end]);
       }}
     />
     <InputGroup.Addon><h6>to</h6></InputGroup.Addon>
     <InputNumber
       min={0}
       max={5000}
       value={value[1]}
       onChange={nextValue => {
         const [start, end] = value;
         if (start > nextValue) {
           return;
         }
         setValue([start, nextValue]);
       }}
     />
   </InputGroup>
   </div>)
}
export default Slider;