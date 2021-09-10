import React from "react";
import "./Card.css";



const Card = props =>{
  return (
  <div className="card text-center shadow">
    <div className="overflow">
      <img src={props.imgsrc} alt="img1" className="card-img-top"/>
    </div>
    <div className="card-body text-dark">
      <h4 className="card-title">Card title</h4>
      <p className="card-text text-secondary">
        Lorem ipsum
      </p>
    </div>
  </div>
  );
}

export default Card;