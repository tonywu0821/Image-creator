import Canvas from './Canvas'
import {useState, useEffect} from 'react'
import './Landing.css';

const Landing = () => {
  const [canvasWidth, setCanvasWidth] = useState(5);
  const [canvasHeight, setCanvasHeight] = useState(5);
  const [canvasMode, setCanvasMode] = useState("normal");
  const [buttonText, setButtonText] = useState("CREATE");
  const [isSubmit,setIsSubmit] = useState(false);


  const handleSubmit = () =>{
    //check if width*height = 32768
    if(true){
      setIsSubmit(!isSubmit);
      buttonText == "RESET" ? setButtonText("CREATE"): setButtonText("RESET")
    }
    setIsSubmit(!isSubmit);
    setButtonText("RESET")
  }
  return (
    <div class ="landing">
      {!isSubmit && <h2>Cutomize your image</h2>}
      {!isSubmit && (<div id = "options">
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
      </div>
      )}
      <button className="button"onClick={handleSubmit}>{buttonText}</button>
      {isSubmit && (<Canvas width={canvasWidth} height={canvasHeight} canvasMode={canvasMode} />)}
    </div>
  )
}

export default Landing
