import React from 'react';
import './CartItem.css';
import { useCart } from './CartContext';

function CartItem({ id, img, Title, Price }) {
  const { dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className='cart-item'>
      <div className='cart-img'>
        <img src={img} alt={Title} />
      </div>
      <div className='cart-title'>{Title}</div>
      <div className='cart-price'>${Price.toFixed(2)}</div>
      <div className='item-count'>
        <button className='count-btn'>-</button>
        <span className='count-number'>1</span>
        <button className='count-btn'>+</button>
      </div>
      <div className='cart-remove' onClick={() => removeFromCart(id)}>
        Remove
      </div>
    </div>
  );
}

export default CartItem;
