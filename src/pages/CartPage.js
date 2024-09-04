// CartPage.js
import React from "react";
import { useCart } from "../components/CartContext";
import "./Cart.css";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  const { state } = useCart();
  const isEmpty = state.items.length === 0;

  const GoBack = () => {
    navigate("/");
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="header">Cart Page</div>
      <div className="cart-page-body">
        {isEmpty ? (
          <div
            className="empty-cart-message"
            onClick={() => {
              GoBack();
            }}
          >
            Your cart is empty. Start shopping to add items!
          </div>
        ) : (
          <>
            {state.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                Title={item.title}
                Price={item.price}
              />
            ))}
            <button className="payment-button">
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
