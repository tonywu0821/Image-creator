import Canvas from './Canvas'
import { useState } from 'react'
import './Landing.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Landing = () => {
  const [canvasWidth, setCanvasWidth] = useState(128);
  const [canvasHeight, setCanvasHeight] = useState(256);
  const [canvasMode, setCanvasMode] = useState("normal");
  const [buttonText, setButtonText] = useState("CREATE");
  const [isSubmit,setIsSubmit] = useState(false);

  const isVaildInput = () => {
    if (!canvasWidth) {
      toast("You need to enter a valid Width!")
      return false;
    } 
    if (!canvasHeight){
      toast("You need to enter a valid Width!")
      return false;
    }
    if(canvasWidth * canvasHeight !== 32768){
      toast("Width * Height is not equal to 32,768")
      return false;
    }
    toast("Great job! This is your image!")
    return true;
  }

  const handleSubmit = () => {
    if (!isSubmit && isVaildInput()) {
      setIsSubmit(!isSubmit);
      setButtonText("RESET");
    } else if (isSubmit) {
      setIsSubmit(!isSubmit);
      setButtonText("CREATE"); 
      setCanvasMode("normal")
    }
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
