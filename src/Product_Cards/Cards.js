import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Link to="/product1" className="col-md-4">
            <Card imgsrc={img1} name={"iPhone 12 64GB Green"} price={"$849"} />
          </Link>
          <Link to="/product2" className="col-md-4">
            <Card imgsrc={img2} name={"Motorola Moto G Power2021"} price={"$295"}/>
          </Link>
          <Link to="/product3" className="col-md-4">
            <Card imgsrc={img3} name={" Samsung Galaxy Z Fold2 5G"} price={"$4950"}/>
          </Link>
        </div>
        <div className="row">
          <Link to="/product4"  className="col-md-4">
            <Card imgsrc={img4} name={"Macbook Air"} price={"$1619"}/>
          </Link>
          <Link to="/product5"  className="col-md-4">
            <Card imgsrc={img5} name={"Alianware x15"} price={"$1800"}/>
          </Link>
          <Link to="/product6"  className="col-md-4">
            <Card imgsrc={img6} name={"Dell Inspiration 2-in-1 Laptop"} price={"$900"}/>
          </Link>
        </div>  
        <div className="row">
          <Link to="/product7"  className="col-md-4 mx-auto">
            <Card imgsrc={img7} name={"Apple Watch Series 6"} price={"$550"}/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Cards;