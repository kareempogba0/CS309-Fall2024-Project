import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';
import { useState } from 'react';

function PaymentPage() {
    const location = useLocation();
    const { cart } = location.state || { cart: [] }; // Retrieve cart from state
    const [formData, setFormData] = useState({
      username: '',
      phone: '',
      cardNumber: ''
  });

  const handleChange = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Submitted: ", formData);
      // Process the payment or store data as needed
      setFormData({
        ...Object.keys(formData).reduce((acc, key) => {
          acc[key] = '';  // Clear the value of each field
          return acc;
        }, {})
      });
      
      
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
};

const totalPrice = calculateTotal();
    return (
        <div >
            <h1>Payment Page</h1>
            
            <div className='parent'>
              <div className='Visa-form'>
              <h3>Enter Your Visa Card Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                            required
                        />
                        </div>

                        <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            pattern="^(01[0-9])([0-9]{3})([0-9]{4})$"  //regex

                            required
                        />
                        </div>
                        <small>Format: 123-456-7890</small>

                        <div> <label htmlFor="cardNumber">Card Number:</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9101 1121"
                            maxLength="16"
                            required
                        /></div>

                        {/* Display the total price */}
                        <div className="total-price">
                            <h4>Total Price: ${totalPrice}</h4>
                        </div>

                        <button type="submit" disabled={totalPrice === 0}>Submit Payment</button>
                    </form>

              </div>
              <div className='display-pay'>
              <h3>Items in Cart:</h3>
              {cart.map((item, index) => (
                  <div className='item-div'>
                      <div key={index}>
                      <div className='div-image'>
                    {item.image && <img src={item.image} alt={item.alt} className="pay-image" />}
                    </div>
                      <p>{item.name}</p>
                      <p>Price: ${item.price}</p>
                  </div>
                  </div>
              ))}
              </div>
            </div>
        </div>
    );
}

export default PaymentPage;
