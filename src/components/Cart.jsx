import React, { useState } from 'react';
import './Cart.css';

const initialCart = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    image: '/img/headphones.jpeg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 4999,
    image: '/img/smartwatch.jpeg',
    quantity: 2,
  },
];

function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-main-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src="/img/emptycart.jpeg" alt="Empty Cart" />
          <p>Your cart is empty. Start shopping!</p>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <span>Total:</span>
            <span className="cart-total">₹{total}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
