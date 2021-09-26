import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img3 from "../images/img3.jpg";
import img5 from "../images/img5.jpg";
import img7 from "../images/img7.jpg";
import home from "../images/home.jpg"


export default function Home() {
  return (
    <HomeWrapper className="div">
      <div className="home-img-wrapper">
        <Link to="products">
          <button type="button" className="btn-shop">
            <b>Let's Shop</b>
          </button>
        </Link>
      </div>
      <div className="featured-title">
        <h1> New Arrivals</h1>
        <hr />
      </div>
      <div className="featured-products-wrapper">
        <div className="featured-img-grid">
          <Link to="/product3" className="product-container">
            <img src={img3} alt="product3" />
            <div className="product-name">
              Samsung Galaxy Z Fold2 5G
              <span>$4950 </span>
            </div>
          </Link>
          <Link to="/product5" className="product-container">
            <img src={img5} alt="product5" />
            <div className="product-name">
              Alianware x15
              <span>$1800 </span>
            </div>
          </Link>
          <Link to="/product7" className="product-container">
            <img src={img7} alt="product7" />
            <div className="product-name">
              Apple Watch Series 6<span>$550</span>
            </div>
          </Link>
        </div>
      </div>
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
 
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  font-size: 1.2rem;
  width: auto;
  row-gap: 3rem;

.home-img-wrapper {
  background-image: url(${home});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 500px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-img-wrapper button {
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #098a70;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  height: 3rem;
  width: 12rem;
  border: 1px solid white;
}
.home-img-wrapper button:hover {
  border: none;
  background-color: white;
  color: #098a70;
}
.home-img-wrapper img {
  max-width: 100%;
  object-fit: cover;
}

.featured-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.featured-products-wrapper {
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}
.featured-img-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 4rem;
  padding: 0 10vw;
}
.featured-img-grid a {
  color: black;
}
.product-container {
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: 0 0px 8px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.1) inset;
}
.product-container:hover {
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.1) inset;
  cursor: pointer;
}
.product-container img {
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  height: 18rem;
  background: white;
}
.product-container span {
  color: var(--theme-color);
  font-weight: bolder;
}
.product-name {
  display: inline-flex;
  justify-content: space-around;
  height: auto;
}
`;
