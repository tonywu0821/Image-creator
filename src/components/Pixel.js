import React from 'react';
import './Pixel.css';
const Pixel = ({color}) => {

  const backGroundColor = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  return (
    <div className = "pixel" style={
      {backgroundColor:backGroundColor(color)}
    }>
    </div>
  )
}

export default Pixel
