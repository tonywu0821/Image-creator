import React from 'react'
import PixelRow from './PixelRow';
import './Canvas.css';

const Canvas = ({width, height, canvasMode}) => {

  // generate all colors
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

  // assign colors to each pixel row
  const createPixelRows = (width, height, colorPool) => {
    let colors = new Array(height);
    for (let i = 0, k = 0; i < height; i++) {
      colors[i] = new Array(width);
      for (let j = 0; j < width; j++) {
        colors[i][j] = colorPool[k++];
      }
    }
    let pixelRows = [];
    for(let i = 0; i < height; i++){
      pixelRows.push(<PixelRow key={i} width={width} colors={colors[i]} />);
    }
    return pixelRows;
  }

  const normalDistribution = (width, height) => {
    return allColors();
  }

  const randomDistribution = (width,height) => {
    return suffleArray(allColors());
  }

  const suffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  let pixelRows = [];
  console.log(canvasMode);
  if(canvasMode === "normal"){
    let colorPool = normalDistribution();
    pixelRows = createPixelRows(width, height, colorPool);
  } else if (canvasMode === "random"){
    let colorPool = randomDistribution();
    pixelRows = createPixelRows(width, height, colorPool);
  }

  return (
    <div class="canvas">
      {pixelRows}
    </div>
  )
}

export default Canvas
