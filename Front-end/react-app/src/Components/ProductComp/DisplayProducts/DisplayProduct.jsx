import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './DisplayProduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';








const DisplayProduct = ({ Counter }) => {
  const [searchterm, setsearchterm] = useState("")
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

  // const products=[ {
  //     "_id": "675da494ca7b4be1f6f45d5c",
  //     "id": 1,
  //     "name": "Laptop",
  //     "price": 1500,
  //     "image": "image_url",
  //     "category": "Dell",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "675da497ca7b4be1f6f45d60",
  //     "id": 2,
  //     "name": "Laptop",
  //     "price": 1500,
  //     "image": "image_url",
  //     "category": "Dell",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "675da499ca7b4be1f6f45d64",
  //     "id": 3,
  //     "name": "Laptop",
  //     "price": 1500,
  //     "image": "image_url",
  //     "category": "Dell",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "675da4b31030081cf6dd9eda",
  //     "id": 14,
  //     "name": "Laptop",
  //     "price": 1500,
  //     "image": "image_url",
  //     "category": "Dell",
  //     "__v": 0
  //   },
  //   {
  //     "_id": "675da90dc30b605c6efc308d",
  //     "id": 15,
  //     "name": "Laptop",
  //     "price": 1500,
  //     "image": "image_url",
  //     "category": "Dell",
  //     "__v": 0
  //   }]
  const productss = [{
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
    "category": "Lenovo",
    "__v": 0
  },
  {
    "_id": "675da499ca7b4be1f6f45d64",
    "id": 3,
    "name": "Laptop",
    "price": 1500,
    "image": "image_url",
    "category": "Lenovo",
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
    "category": "HP",
    "__v": 0
  }]

  const [products, setProducts] = useState([]);  // State to store the fetched products
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        console.log("Response from /products:", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching /products:", error.message);
      });
  }, []); // Empty dependency array to run the effect only once


  return (
    <>
      <div className="Search">
        {/* <h2>Search </h2> */}
        <input id="SearchInput" type="text" placeholder="search here ...." onChange={(event) => {
          setsearchterm(event.target.value);
        }} />
      </div>
      <div className="Filterdata">
        {
          productss.filter((val) => {
            if (searchterm === "") {
              return (
                <div className="display">
                  {productss.map((product, index) => (
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
                </div>);
            }
            else if (val.category.toLowerCase().includes(searchterm.toLowerCase())) {
              return val;
            }
          })
            .map((product, index) => (
              <ProductCard
                key={index}
                title={product.name}  // Use 'name' here instead of 'title'
                price={product.price}
                image={product.image}
                Counter={Counter}
                product={product}  // Pass the full product object
                index={index}
                category={product.category}
              />
            ))
        }
      </div>
    </>
  );

};

export default DisplayProduct;
