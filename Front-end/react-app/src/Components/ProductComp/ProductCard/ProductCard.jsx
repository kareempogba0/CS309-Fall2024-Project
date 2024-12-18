import React from 'react';
import './ProductCard.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';







const ProductCard = ({ title, salary, image }) => {
    return (
        <div className="productcard-card">
            {image && <img src={image} alt={title} className="productcard-image" />}
            <div className="productcard-content">
                <h3 className="productcard-title">{title}</h3>
                <h4 className="productcard-prices">Price: <span>{salary}</span></h4>
                <p className="productcard-link">
                    Desc..
                </p>
            </div>
            <div className="btn-Buy">
                <h2> Add </h2>
                <FontAwesomeIcon className="fs" icon={faShoppingCart} size="1x" />
                {/*font awsome buy icon*/}
            </div>
        </div>
    );
};
export default ProductCard;