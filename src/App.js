import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Product1 from "./pages/products/product1";
import Product2 from "./pages/products/product2";
import Product3 from "./pages/products/product3";
import Product4 from "./pages/products/product4";
import Product5 from "./pages/products/product5";
import Product6 from "./pages/products/product6";
import Product7 from "./pages/products/product7";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product1" component={Product1} />
        <Route exact path="/product2" component={Product2} />
        <Route exact path="/product3" component={Product3} />
        <Route exact path="/product4" component={Product4} />
        <Route exact path="/product5" component={Product5} />
        <Route exact path="/product6" component={Product6} />
        <Route exact path="/product7" component={Product7} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
