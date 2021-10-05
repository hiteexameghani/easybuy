import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css";
import img6 from "../../images/img6.jpg";

class Product6 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product6"] !== undefined || data["product6"] != null)
      ) {
        let data2 = {
          name: "Dell Inspiration 15 2-in-1 Laptop",
          tag: "assets/images_/img6.jpg",
          price: 900,
          inCart: data["product6"]["inCart"] + 1,
        };

        CartService.update("product6", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Dell Inspiration 15 2-in-1 Laptop",
          tag: "assets/images_/img6.jpg",
          price: 900,
          inCart: 1,
        };
        CartService.create(data, "product6")
          .then(() => {
            alert("Created new item successfully!");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  }
  render() {
    return (
      <main id="main">
        <div className="product-content-wrapper">
          <div className="zoomin">
            <img src={img6} alt="p1" />
            <div className="product-details">
              <h3>Dell Inspiration 15 2-in-1 Laptop</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $900
              </div>
              <p>
                Availability: <span style={{ color: "#03775e" }}>In-stock</span>
              </p>
              <Link to="#" className="add-cart">
                <button id="cart-1" onClick={() => this.addToCart()}>
                  Add To Cart
                </button>
              </Link>
              <Link to="/products" style={{ color: "#03775e" }}>
                <i className="fa fa-arrow-alt-circle-left"></i> Back to Products
              </Link>
            </div>
          </div>
          <div className="features-title">Specifications</div>
          <div className="features">
            <ul>
              <li>11th Generation Intel® Core™ i5-1135G7 Processor</li>
              <li>Windows 10 Home English</li>
              <li>Intel® Iris® Xe Graphics with shared graphics memory</li>
              <li>8GB, 2x4GB, DDR4, 3200MHz</li>
              <li>256GB M.2 PCIe NVMe Solid State Drive</li>
              <li>15.6-in. touch display</li>
              <li>Starting at 3.93 lbs</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product6;
