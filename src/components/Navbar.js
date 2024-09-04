// Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import Cart from "../assets/icon/cart.png";
import { useCart } from "./CartContext";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { state } = useCart();
  console.log(state);

  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation">
        <p>MEM</p>
        <p>WOMEN</p>
        <p>SPORTS</p>
        <p>BEAUTY</p>
        <p>CHILD</p>
        <p>SPECIAL</p>
      </div>
      <div className="cart">
        <img src={Cart} alt="cart" onClick={() => navigate('/cart')}/>
      </div>
      <span className="cart-count">{state.items.length}</span>

    </div>
  );
}

export default Navbar;
