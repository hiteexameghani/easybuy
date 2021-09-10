import React, { Component } from 'react';
import Card from './CardUI';
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
//import "./Card.css"

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img1}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img2}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img3}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img4}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img5}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img6}/>
          </div>
          <div className="col-10 mx-auto col-sm-8 col-md-6  col-lg-4 my-3">
            <Card imgsrc={img7}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;