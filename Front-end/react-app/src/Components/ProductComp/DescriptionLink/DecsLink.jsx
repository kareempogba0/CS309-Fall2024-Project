import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../DescriptionLink/DescLink.css'; 

const DecsLink = () => {
    const location = useLocation();  // Get the location object
    const { product, index } = location.state || {};  // Destructure the product and index from the state

    return (
        <div className="description-container">
            <div className="description-card">
                {/* Image on the left */}
                <div className="description-image">
                    <img src={product?.image} alt={product?.title} />
                </div>
                {/* Content on the right */}
                <div className="description-content">
                    <h1>Product Description</h1>
                    <p><strong>Index:</strong> {index}</p>
                    <h2>{product?.title}</h2>
                    <p><strong>Price:</strong> {product?.price}</p>
                    <p>{product?.category}</p>
                </div>
            </div>
        </div>
    );
};

export default DecsLink;

