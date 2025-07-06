import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
       <img className="hero-img" src="/img/headphones.jpeg" alt="headphones" />
        {product.isNew && <span className="product-badge">New</span>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <Link to={`/product/${product.id}`} className="product-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
