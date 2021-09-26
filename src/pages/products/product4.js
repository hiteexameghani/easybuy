import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css";
import img4 from "../../images/img4.jpg";

class Product4 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product4"] !== undefined || data["product4"] != null)
      ) {
        let data2 = {
          name: "Macbook Air",
          tag: "assets/images_/img4.jpg",
          price: 1619,
          inCart: data["product4"]["inCart"] + 1,
        };

        CartService.update("product4", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Macbook Air",
          tag: "assets/images_/img4.jpg",
          price: 1619,
          inCart: 1,
        };

        CartService.create(data, "product4")
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
            <img src={img4} alt="p1" />
            <div className="product-details">
              <h3>MacBook Air</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $1619
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
              <li>Originally released March 2020</li>
              <li>
                13.3-inch (diagonal) LED-backlit display with IPS technology
              </li>
              <li>16GB of 3733MHz LPDDR4X onboard memory</li>
              <li>512GB PCIe-based SSD</li>
              <li>720p FaceTime HD Camera</li>
              <li>2560x1600 native resolution at 227 pixels per inch</li>
              <li>Intel Iris Plus Graphics</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product4;
