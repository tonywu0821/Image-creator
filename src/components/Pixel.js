import React from 'react'

const Pixel = ({color}) => {

  const backGroungColor = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  return (
    <div style={{backgroundColor:backGroungColor(color)}}>
      Pixel
    </div>
  )
}

export default Pixel
