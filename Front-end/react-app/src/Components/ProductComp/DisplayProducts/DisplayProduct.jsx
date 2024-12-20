import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './DisplayProduct.css';
import  { useState, useEffect } from 'react';
import axios from 'axios';
const DisplayProduct = ({ Counter }) => {
    const [products, setProducts] = useState([]);  
    useEffect(() => {
      axios.get('http://localhost:5000/products')
      .then((response) => {
        console.log("Response from /products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching /products:", error.message);
      });
    }, []); 


    return (
      <div className="display">
          {products.length > 0 ? (
              products.map((product, index) => (
                  <ProductCard
                      key={index}
                      title={product.name}
                      price={product.price}
                      image={product.image}
                      Counter={Counter}
                      product={product}
                      index={index}
                      category={product.category}
                  />
              ))
          ) : (
              <p>No products available</p>
          )}
      </div>
  );
  
};

export default DisplayProduct;
