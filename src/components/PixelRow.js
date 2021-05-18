import React from 'react'
import Pixel from './Pixel'
const PixelRow = ({width,colors}) => {

  let pixels = [];

  for(let i = 0; i < width; i++){
    //console.log(colors);
    pixels.push(<Pixel color={colors[i]} />);
  }

  return (
    <div>
      This is a Pixel Row
      {pixels}
    </div>
  )
}

export default PixelRow
