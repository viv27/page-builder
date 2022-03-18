import React,{useState} from 'react'
import './modal.css'
import '../components/Circle'
import Circle from '../components/Circle'
function Modal({setModal,setCircles}) {

  const [colour,setColour] = useState("")
  const [width,setWidth] = useState("")
  const [height,setHeight] = useState("")
  const [text,setText] = useState("")

   const addCircles = () => {
    setCircles(circles => [...circles, <Circle id={Math.floor(Math.random() * 10000)}  width={width} height={height} text={text}/>]);
    setModal(false)
    
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
          <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
          {/* <div className="title">
            {/* <p>Enter a colour:</p>
            <input value={colour} onChange={(e)=>setColour(e.target.value)} ></input> */}
          {/* </div> */} 
          <div className="body">
            <p>Enter Width:</p>
            <input placeholder="width in pixels (ex 200px)" value={width} onChange={(e)=>setWidth(e.target.value)} ></input>
            <p>Enter Height:</p>
            <input placeholder="height in pixels (ex 200px)" value={height} onChange={(e)=>setHeight(e.target.value)} ></input>
          </div>
          <div className="body">
            <p>Enter Text:</p>
            <input placeholder="Enter a text to display" value={text} onChange={(e)=>setText(e.target.value)} ></input>
          </div>
          <div className="footer">
            <button onClick={()=>setModal(false)}>Cancel</button>
            <button onClick={addCircles}>Continue</button>
          </div>
      </div>
    </div>
  )
}

export default Modal