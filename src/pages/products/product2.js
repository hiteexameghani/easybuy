import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css";
import img2 from "../../images/img2.jpg";

class Product2 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product2"] !== undefined || data["product2"] != null)
      ) {
        let data2 = {
          name: "Motorola Moto G Power 2021",
          tag: "assets/images_/img2.jpg",
          price: 295,
          inCart: data["product2"]["inCart"] + 1,
        };

        CartService.update("product2", data2)
          .then(() => { 
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Motorola Moto G Power 2021",
          tag: "assets/images_/img2.jpg",
          price: 295,
          inCart: 1,
        };

        CartService.create(data, "product2")
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
            <img src={img2} alt="p1" />
            <div className="product-details">
              <h3>Motorola Moto G Power 2021</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $295
              </div>
              <p>
                Availability: <span style={{ color: "#03775e" }}>In-stock</span>
              </p>
              <Link to="#" className="add-cart">
                <button id="cart-2" onClick={() => this.addToCart()}>
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
              <li>
                Processor: Qualcomm Snapdragon 662 8 x 1.8 - 2 GHz, Kryo 260
              </li>
              <li>Graphics adapter: Qualcomm Adreno 610</li>
              <li>Memory: 3072 MB, or 4GB</li>
              <li>
                Display: 6.60 inch 20:9, 1600 x 720 pixel 266 PPI, Capacitive,
                IPS, glossy: yes
              </li>
              <li>Storage: 32 GB eMMC Flash, 32 GB, or 64GB</li>
              <li>
                Size: height x width x depth (in mm): 9.5 x 165.3 x 75.9 ( =
                0.37 x 6.51 x 2.99 in)
              </li>
              <li>Battery: 5000 mAh Lithium-Polymer</li>
              <li>Operating System: Android 10</li>
              <li>Camera: Primary Camera: 48 MPix Triple: 48MP</li>
              <li>
                Weight: 206.5 g ( = 7.28 oz / 0.46 pounds) ( = 0 oz / 0 pounds)
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product2;
