import Canvas from './Canvas'
import {useState, useEffect} from 'react'

const Landing = () => {
  const [canvasWidth, setCanvasWidth] = useState(5);
  const [canvasHeight, setCanvasHeight] = useState(5);
  const [canvasMode, setCanvasMode] = useState("normal");
  const [isSubmit,setIsSubmit] = useState(false);

  return (
    <div>
      <h2>Image Creator</h2>
      <div id = "options">
        <div>
          <span>Width: </span>
          <input
            type="number"
            defaultValue={canvasWidth}
            onChange={(e) => {setCanvasWidth(e.target.value)}}
          />
        </div>
        <div>
          <span>Height: </span>
          <input
            type="number"
            defaultValue={canvasHeight}
            onChange={(e) => {setCanvasHeight(e.target.value)}}
          />
        </div>
        <div>
          <span>Method: </span>
          <select id = "method" onChange = {e => {
            setCanvasMode(e.target.value);
          }}>
            <option value="normal">normal</option>
            <option value="random">random</option>
          </select>
        </div>
        <button>Create Image Now!</button>


      </div>
      <Canvas width={canvasWidth} height={canvasHeight}/>
    </div>
  )
}

export default Landing
