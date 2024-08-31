import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <>  
       <a href="#!" className="card">
        <div className="card_img">
            <img src={props.img} alt={props.title}/>
        </div>
        <h5 className="card_title">{props.title}</h5>
        <strong className="card_price">{props.price }</strong>
        <div className="card_desc_box">
            <span className="card_desc">{props.address}</span>
            <span className="card_desc">{props.date}</span>
        </div>
        
    </a>
     </>
  )
}

export default Card