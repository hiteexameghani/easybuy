import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./Navbar.css";
import logo from "../images/logo.png";
import CartService from "../pages/CartService";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [totalLength, setTotalLength] = useState(0);
  const [names, setNames] = useState([]);

  useEffect(() => {
    addData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showSidebar = () => setSidebar(!sidebar);

  const addData = () => {
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

      setNames([...names, names2]);
      setTotalLength(totalLength + names2.length);
    });
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <img src={logo} className="logo" alt="company-logo" />
        <Link to="/cart" className="cart-icon">
          <span>
            <FaIcons.FaCartPlus />
            <b style={{ fontSize: "1.2rem" }}>{totalLength}</b>
          </span>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li>
            <Link to="#" className="close-btn">
              <FaIcons.FaTimes className="a" />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="side-text">
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
