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
                    <p>{product?.description}</p>
                    <p><strong>Index:</strong> {index}</p>
                    <h2>{product?.title}</h2>
                    <p><strong>Price:</strong> {product?.price}</p>
                    <p>{product?.category}</p>
                    <p>
                    {product?.rating && product?.rating.rate > 0 && product?.rating.count > 0 ? (
                        <>
                        <strong>Rating:</strong>
                        <span>
                            {Array.from({ length: 5 }, (_, index) => (
                            <span
                                key={index}
                                style={{
                                color: index < product.rating.rate ? '#ffc107' : '#e4e5e9',
                                marginRight: '2px',
                                }}
                            >
                                ★
                            </span>
                            ))}
                        </span>
                        <span style={{ marginLeft: '8px' }}>({product.rating.count} reviews)</span>
                        </>
                    ) : (
                        <span>No ratings yet</span>
                    )}
                    </p>


                </div>
            </div>
        </div>
    );
};

export default DecsLink;

