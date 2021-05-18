import React from 'react'
import './PixelRow.css';
import Pixel from './Pixel'
const PixelRow = ({width,colors}) => {

  let pixels = [];

  for(let i = 0; i < width; i++){
    pixels.push(<Pixel color={colors[i]} />);
  }

  return (
    <div className ="pixel__row">
      {pixels}
    </div>
  )
}

export default PixelRow
