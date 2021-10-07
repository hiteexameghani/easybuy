import { Link } from "react-router-dom";
import React, { Component } from "react";
import CartService from "./CartService";
import cart from "../images/cart.png";
import "../App.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.addData = this.addData.bind(this);
    this.totalLength = 0;
    this.state = {
      names: [],
    };
  }
  componentDidMount() {
    this.addData();
  }

  removeItem(key) {
    CartService.delete(key)
      .then(() => {
        this.addData();
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  addData() {
    CartService.getAll().once("value", (items) => {
      let names2 = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();

        names2.push({
          name: data.name,
          price: data.price,
          inCart: data.inCart,
          tag: data.tag,
          key: key,
        });
      });
      this.setState({
        names: names2,
        totalLength: names2.length,
      });
    });
  }
  render() {
    const { names } = this.state;
    const totalLength = this.state.totalLength;
    return (
      <main id="main">
        <h1 className="text-center" style={{ paddingTop: "4rem" }}>
          Shoping Cart
        </h1>
        {totalLength === 0 && (
          <div
            className="col-md-12 text-center p-5 container-fluid"
            style={{ height: "900px" }}
          >
            <br />
            <center>
              <img
                src={cart}
                style={{ width: "100px" }}
                className="img img-fluid img-thumbnail"
                alt="Cart"
              />
            </center>
            <br />
            <h4 className="pt-4">Your Cart is Currently Empty</h4>

            <p>
              You have no items in a cart. Go to products page and select the
              product of your choice
            </p>
            <Link to="/products" className="btn btn-success">
              Shop Now
            </Link>
          </div>
        )}
        {totalLength !== 0 && names && (
          <div
            className="cardy col-md-12 text-center p-5 container-fluid"
            style={{ minHeight: "900px" }}
          >
            <table className="table" style={{ maxWidth: "100%" }}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Operation</th>
                </tr>
              </thead>

              <tbody>
                {names &&
                  names.map((item, index) => (
                    <tr>
                      <td>
                        <img
                          src={item.tag}
                          alt="device img"
                          style={{ height: "80px" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.inCart}</td>
                      <td>${item.price * item.inCart}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.removeItem(item.key)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Link
              to="/products"
              className="btn btn-success"
              style={{ marginTop: "3rem" }}
            >
              Shop More Products
            </Link>
          </div>
        )}
      </main>
    );
  }
}

export default Cart;
