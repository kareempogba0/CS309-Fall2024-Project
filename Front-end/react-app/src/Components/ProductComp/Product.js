import './ProductCss.css';
import React, { useState } from 'react';
import DisplayProduct from './DisplayProducts/DisplayProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

function Product() {
    const [CartCount, setCartCount] = useState(0); 
    const [cart, setCart] = useState([]);


    const Counter = (product) => {
        setCartCount(CartCount + 1); 
        setCart((prevCart) => [...prevCart, product]); 
    };



    return (
        <>
            <div className='section'>
                <div className='product'>
                    <h1>Our Products</h1>
                </div>
                <div>
                    {/* Pass the Counter function to DisplayProduct */}
                    <DisplayProduct Counter={Counter} />
                </div>
            </div>


            <Link to="/payment" state={{ cart }}  style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='payment'>
                    <h4>Cart</h4>
                    <span>{CartCount}</span> {/* Display the cart count */}
                    <FontAwesomeIcon className="fs" icon={faShoppingCart} size="1x" />
                </div>
            </Link>
        </>
    );
}

export default Product;

