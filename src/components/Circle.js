import React from 'react'

function Circle({colour,width,height,text,id}) {
  return (
    <div id={id} style={{backgroundColor:colour,width:width,height:height}} className="circle" >
        <p  className="text">{text}</p>
    </div>
  )
}

export default Circle