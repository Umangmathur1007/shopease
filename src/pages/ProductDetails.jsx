import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';


const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    image: '/img/headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 4999,
    image: '/img/smartwatch.jpg',
    description: 'Track your fitness and notifications on your wrist.',
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-details-container"><p>Product not found.</p></div>;
  }

  return (
    <div className="product-details-container">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
