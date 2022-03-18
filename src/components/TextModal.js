import React,{useState} from "react";


function TextModal({ setTextModal ,setHeading}) {

  const [text,setText] = useState("")

  function addText(){
    setHeading(text);
    setTextModal(false)
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setTextModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Enter a heading </h1>
        </div>
        <div className="body">
          <input value={text} onChange={(e)=>setText(e.target.value)} ></input>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setTextModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={addText} >continue</button>
        </div>
      </div>
    </div>
  );
}

export default TextModal