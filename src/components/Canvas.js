import React from 'react'
import PixelRow from './PixelRow';

const Canvas = ({width, height}) => {

  const allColors = () => {
    let colors = []
    for(let i = 1; i < 33; i++){
      for(let j = 1; j < 33; j++){
        for(let k = 1; k < 33; k++){
          let color = [i * 8, j * 8, k * 8];
          colors.push(color);
        }
      }
    }
    return colors;
  }

  const normalDistribution = (width, height) => {
    let colorPool = allColors();
    console.log(colorPool);
    console.log("width:"+width);
    console.log("height:"+height);

    let colors = new Array(height);
    for (let i = 0, k = 0; i < height; i++) {
      colors[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        //console.log("kkkkkk:"+k)
        //console.log(colorPool[k]);
        colors[i][j] = colorPool[k++];
      }
    }
    //console.log("OOO");
    console.log(colors[0][0]);
    return colors;
  }
  
  
  let colors = normalDistribution(width,height);
  console.log(colors);
  let pixelRows = [];
  for(let i = 0; i < height; i++){
    pixelRows.push(<PixelRow key={i} width={width} colors={colors[i]} />);
  }

  return (
    <div>
      This is canvas
      {pixelRows}
    </div>
  )
}

export default Canvas
