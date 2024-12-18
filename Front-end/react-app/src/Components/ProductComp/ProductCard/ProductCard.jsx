import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ title, price, image, Counter, product, index,category }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle description click and navigate to the new page
    const handleDescriptionClick = () => {
        navigate(`/Description`, { state: { product, index } }); // Pass both product and index
    };

    return (
        <div className="productcard-card">
            {image && <img src={image} alt={title} className="productcard-image" />}
            <div className="productcard-content">
                <h3 className="productcard-title">{title}</h3>
                <h3 className="productcard-title">{category}</h3>
                <h4 className="productcard-prices">Price: <span>{price}</span></h4> {/* Use 'price' instead of 'salary' */}
                <h5 onClick={handleDescriptionClick} className='productcard-link'>Desc...</h5>
            </div>
            <div className="btn-Buy" onClick={Counter}> {/* Call Counter on click */}
                <h2> Add </h2>
                <FontAwesomeIcon className="fs" icon={faShoppingCart} size="1x" />
            </div>
        </div>
    );
};

export default ProductCard;

