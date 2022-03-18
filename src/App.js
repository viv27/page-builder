import {useState, useEffect} from 'react'
import './App.css';
import Circle from './components/Circle'
import Modal from './components/Modal'
import TextModal from './components/TextModal'
import CircleModal from './components/CircleModal'
import profile from './images/profile.jpg'
function App() {


 let [circles,setCircles] =useState([])
 const [modal,setModal] = useState(false)
 const [textModal,setTextModal] = useState(false)
 const [heading,setHeading] = useState("")
 const [image,setImage] = useState("")
 const [profileImg,setProfileImg] = useState(profile)
 const [circleModal,setCircleModal] = useState(false)
 const [width,setWidth] = useState();
 const [height,setHeight] = useState();
 const [text,setText] = useState();
 const [id,setId] = useState("")
 console.log("CIRCLES",circles)

 const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setProfileImg(reader.result)
        
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
 
  return (
    <div className="App">
      <div className="buttons">
      <button className="openModalBtn"
      onClick={()=>setModal(true)}
      >Create button</button>

      <button className="openModalBtn"
      onClick={()=>setTextModal(true)}
      >Create Heading</button>
      </div>

      {modal ? <Modal setCircles={setCircles} setModal={setModal} />:""}
      {textModal ? <TextModal setTextModal={setTextModal} setHeading={setHeading}/>:""}
      {circleModal ? <CircleModal setCircleModal={setCircleModal} id={id} circles={circles} setCircles={setCircles} textt={text} heightt={height} widtht={width}/>:""}

      <p className="heading">{heading}</p>
     

      <div className="container">
					
					<div className="img-holder">
						<img className="img" src={profileImg} alt="" id="img"  />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						
					
					</label>
          </div>
				</div>
      
      <div className="circle-buttons">
        
        {circles.map((item, i) => (
          
        <div  onClick={()=> {setCircleModal(true)
                            setId(item.props.id)
                            setWidth(item.props.width)
                            setHeight(item.props.height)
                            setText(item.props.text)
        }} className="circle-button" key={i}>{item}</div>
        
      ))}
      </div>
      
      
    </div>
  );
}

export default App;
