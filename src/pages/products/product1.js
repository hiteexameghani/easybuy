import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css";
import img1 from "../../images/img1.jpg";

class Product1 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();

      if (
        data != null &&
        (data["product1"] !== undefined || data["product1"] != null)
      ) {
        let data2 = {
          name: "iPhone 12 64GB Green",
          tag: "assets/images_/img1.jpg",
          price: 849,
          inCart: data["product1"]["inCart"] + 1,
        };

        CartService.update("product1", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "iPhone 12 64GB Green",
          tag: "assets/images_/img1.jpg",
          price: 849,
          inCart: 1,
        };

        CartService.create(data, "product1")
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
            <img src={img1} alt="p1" />
            <div className="product-details">
              <h3>iPhone 12 64GB Green</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $849
              </div>
              <p>
                Availability:<span style={{ color: "#03775e" }}>In-stock</span>
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
              <li>Liquid Retina HD display</li>
              <li>6.1 inch (diagonal) all-screen LCD</li>
              <li>Multi-Touch display with IPS technology</li>
              <li>1792 by 828 pixel resolution at 326 ppi</li>
              <li>1400:1 contrast ratio (typical)</li>
              <li>True Tone display</li>
              <li>Wide colour display (P3)</li>
              <li>Haptic Touch</li>
              <li>625 nits max brightness (typical)</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product1;
