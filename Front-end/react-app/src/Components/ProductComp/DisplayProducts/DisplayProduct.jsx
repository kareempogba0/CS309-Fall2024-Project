import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./DisplayProduct.css"
import { useNavigate } from 'react-router-dom';





const product = [
  {
    title: 'One',
    description: 'Description for product one.',
    link: 'https://example.com/product-one',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Two',
    description: 'Description for product two.',
    link: 'https://example.com/product-two',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Three',
    description: 'Description for product three.',
    link: 'https://example.com/product-three',
    image: 'https://via.placeholder.com/300',
  },
];


const DisplayProduct = () => {
  
  return (
    <>
      <div className="display">
      {product.map((product, index) => (
        <ProductCard
          key={index} // Use a unique key for each card
          title={product.title}
          description={product.description}
          image={product.image}
          
        />
      ))}
    </div>
    </>
  );
};



export default DisplayProduct;
