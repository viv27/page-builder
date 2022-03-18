import React from 'react'

export default function board(props) {

  const drop = e =>{
    e.preventDefault();
    const card_id = e.dataTransfer.getData()
  }
  return (
    <div>
      {props.children}
    </div>
  )
}
