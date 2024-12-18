import './ProductCss.css';
import React, { useState } from 'react';
import DisplayProduct from './DisplayProducts/DisplayProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Product() {
    const [CartCount, setCartCount] = useState(0); 

    const Counter = () => {
        setCartCount(CartCount + 1); // Increment cart count
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
            <div className='payment'>
                <h4>Cart</h4>
                <span>{CartCount}</span> {/* Display the cart count */}
                <FontAwesomeIcon className="fs" icon={faShoppingCart} size="1x" />
            </div>
        </>
    );
}

export default Product;

