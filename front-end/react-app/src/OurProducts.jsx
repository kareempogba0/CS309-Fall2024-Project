// import React from 'react';
import { products } from './Mockup_data/products';

const OurProducts = () => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
            onError={(e) => {
              e.target.src = 'placeholder.png'; // Provide a placeholder image
              e.target.alt = 'Image not available';
            }}
          />
          <h2>{product.title}</h2>
          <p className="price">${product.price}</p>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
          </p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default OurProducts;
