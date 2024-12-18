import './ProductCss.css';
import React from 'react';
import DisplayProduct from './DisplayProducts/DisplayProduct';



function product() {
    return (
        <>
            <div className='section'>

                <div className='product'>
                    <h1>Our Products</h1>
                </div>

                <div>
                    {/* display Products */}
                    <DisplayProduct />
                </div>

            </div>
        </>
    );
}

export default product;