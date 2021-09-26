import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.imgsrc} alt="img1" className="card-img-top"/>
      </div>
      <div className="card-body d-flex justify-content-between">
        <p className="mb-0 text-black">{props.name}</p>
        <h4 className="mb-0" style={{color:"green", fontWeight:"bolder"}}>{props.price}</h4>
      </div>
    </div>
  );
};

export default Card;
