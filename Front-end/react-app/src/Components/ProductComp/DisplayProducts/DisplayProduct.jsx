import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './DisplayProduct.css';
import  { useState, useEffect } from 'react';








const DisplayProduct = ({ Counter }) => {

    // const [products, setProducts] = useState([]);  // State to store the fetched products

    // const fetchProducts = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/products');
    //         const data = await response.json(); // Assuming the data is an array of products
    //         setProducts(data);  // Set the fetched data into the products state
    //         console.log(data); // Log the data to see it in the console
    //     } catch (error) {
    //         console.log('Error fetching data:', error);
    //     }
    // };

    // // Fetch products on component mount
    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    const products=[ {
        "_id": "675da494ca7b4be1f6f45d5c",
        "id": 1,
        "name": "Laptop",
        "price": 1500,
        "image": "image_url",
        "category": "Dell",
        "__v": 0
      },
      {
        "_id": "675da497ca7b4be1f6f45d60",
        "id": 2,
        "name": "Laptop",
        "price": 1500,
        "image": "image_url",
        "category": "Dell",
        "__v": 0
      },
      {
        "_id": "675da499ca7b4be1f6f45d64",
        "id": 3,
        "name": "Laptop",
        "price": 1500,
        "image": "image_url",
        "category": "Dell",
        "__v": 0
      },
      {
        "_id": "675da4b31030081cf6dd9eda",
        "id": 14,
        "name": "Laptop",
        "price": 1500,
        "image": "image_url",
        "category": "Dell",
        "__v": 0
      },
      {
        "_id": "675da90dc30b605c6efc308d",
        "id": 15,
        "name": "Laptop",
        "price": 1500,
        "image": "image_url",
        "category": "Dell",
        "__v": 0
      }]




    return (
        <div className="display">
            {products.map((product, index) => (
                <ProductCard
                key={index}
                title={product.name}  // Use 'name' here instead of 'title'
                price={product.price}
                image={product.image}
                Counter={Counter}
                product={product}  // Pass the full product object
                index={index}  
                category={product.category}  // Pass the index
                />
            ))}
        </div>
    );
};

export default DisplayProduct;
