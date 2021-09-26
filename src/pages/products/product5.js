import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css"
import img5 from "../../images/img5.jpg"

class Product5 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product5"] !== undefined || data["product5"] != null)
      ) {
        let data2 = {
          name: "Alianware x15",
          tag: "assets/images_/img5.jpg",
          price: 1800,
          inCart: data["product5"]["inCart"] + 1,
        };

        CartService.update("product5", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Alianware x15",
          tag: "assets/images_/img5.jpg",
          price: 1800,
          inCart: 1,
        };
        CartService.create(data, "product5")
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
            <img src={img5} alt="p1" />
            <div className="product-details">
              <h3>Alianware x15</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $1800
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
              <li>Game greater with our fastest 15” G-SYNC displays</li>
              <li>
                Featuring Alienware Cryo-Tech™ cooling and 11th Gen Intel® Core™
                processors
              </li>
              <li>
                11th Gen Intel® Core™ i7-11800H (8-Core, up to 4.6GHz with Turbo
                Boost Technology)
              </li>
              <li>512GB PCIe-based SSD</li>
              <li>Windows DirectX 12 Ultimate</li>
              <li>Upto NVIDIA® GeForce RTX™ 3070 8GB GDDR6</li>
              <li>Intel Iris Plus Graphics</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product5;
