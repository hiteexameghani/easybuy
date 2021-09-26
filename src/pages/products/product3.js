import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartService from "../CartService";
import "./styles.css";
import img3 from "../../images/img3.jpg";

class Product3 extends Component {
  addToCart() {
    CartService.getAll().once("value", (snapshot) => {
      const data = snapshot.val();
      if (
        data != null &&
        (data["product3"] !== undefined || data["product3"] != null)
      ) {
        let data2 = {
          name: "Samsung galaxy Z Fold2 5G",
          tag: "assets/images_/img3.jpg",
          price: 4950,
          inCart: data["product3"]["inCart"] + 1,
        };

        CartService.update("product3", data2)
          .then(() => {
            alert("Cart updated");
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        let data = {
          name: "Samsung galaxy Z Fold2 5G",
          tag: "assets/images_/img3.jpg",
          price: 4950,
          inCart: 1,
        };
        CartService.create(data, "product3")
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
            <img src={img3} alt="p3   " />
            <div className="product-details">
              <h3>Samsung galaxy Z Fold2 5G</h3>
              <div
                style={{
                  color: "#03775e",
                  fontWeight: "bolder",
                  fontSize: "xx-large",
                }}
              >
                $4950
              </div>
              <p>
                Availability: <span style={{ color: "#03775e" }}>In-stock</span>
              </p>
              <Link to="#" className="add-cart">
                <button id="cart-3" onClick={() => this.addToCart()}>
                  Add To Cart
                </button>
              </Link>
              <Link to="/products" style={{ color: "#03775e" }}>
                <i className="fa fa-arrow-alt-circle-left"></i> Back to products
              </Link>
            </div>
          </div>
          <div className="features-title">Specifications</div>
          <div className="features">
            <ul>
              <li>Display (Primary) 7.60-inch</li>
              <li>Processor octa-core</li>
              <li>Front Camera 10-megapixel + 4-megapixel</li>
              <li>Rear Camera 12-megapixel + 12-megapixel + 12-megapixel</li>
              <li>RAM 12GB</li>
              <li>Storage 256GB</li>
              <li>Battery Capacity 4400mAh</li>
              <li>OS Android 11</li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default Product3;
