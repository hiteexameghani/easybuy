import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css"
import img7 from "../../images/img7.jpg"

class Product7 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product7"] !== undefined || data["product7"] != null)
      ) {
        let data2 = {
          name: "Apple Watch Series 6",
          tag: "assets/images_/img7.jpg",
          price: 550,
          inCart: data["product7"]["inCart"] + 1,
        };

        CartService.update("product7", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Apple Watch Series 6",
          tag: "assets/images_/img7.jpg",
          price: 550,
          inCart: 1,
        };
        CartService.create(data, "product7")
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
            <img src={img7} alt="p1" />
            <div className="product-details">
              <h3>Apple Watch Series 6</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $550
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
              <li>Always-On Retina display</li>
              <li>44mm or 40mm. case size</li>
              <li>GPS + Cellular</li>
              <li>Blood Oxygen app</li>
              <li>ECG app</li>
              <li>High and low heart-rate notifications</li>
              <li>Irregular heart rhythm notification</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product7;
