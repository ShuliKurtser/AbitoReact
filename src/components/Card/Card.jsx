// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Card.css"
// const Card = (props) => {
//   return (
//     <>  
//        <Link to={`/product/${id}`} className="card">
//         <div className="card_img">
//             <img src={props.img} alt={props.title}/>
//         </div>
//         <h5 className="card_title">{props.title}</h5>
//         <strong className="card_price">{props.price }</strong>
//         <div className="card_desc_box">
//             <span className="card_desc">{props.address}</span>
//             <span className="card_desc">{props.date}</span>
//         </div>
        
//     </Link>
//      </>
//   )
// }

// export default Card
import { Link } from "react-router-dom";
import "./Card.css";

 const Card = ({ id, title, price, address, date, img }) => {
  console.log(id); // Добавьте это в компонент Card, чтобы убедиться, что id приходит

  return (
    <Link to={`/product/${id}`} className="card">
      <div className="card_img">
        <img src={`${img}`} alt="card-img" />
      </div>
      <h5 className="card_title">{title}</h5>

      <strong className="card_price">{price} $</strong>

      <div className="card_desc_box">
        <span className="card_desc">{address}</span>

        <span className="card_desc">{date}</span>
      </div>
    </Link>
  );
};
export default Card