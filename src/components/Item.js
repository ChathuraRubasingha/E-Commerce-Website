import React from "react";
import "./Item.css";
import { useCart } from "./CartContext";

function Item({ Id, Img, Title, Price }) {
  const { dispatch } = useCart();

  const addToCart = (id, img, title, price) => {
    const newItem = { id, img, title, price };
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : title;
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={Img} alt={Title} />
      </div>
      <div className="card-body">
        <p className="card-header">{truncateTitle(Title)}</p>
        <p className="card-price">${Price.toFixed(2)}</p>
      </div>
      <div className="button-wrapper">
        <button
          className="card-addtocart"
          onClick={() => addToCart(Id, Img, Title, Price)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
