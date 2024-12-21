import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 5, // Default rating
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', formData);
    alert('Thank you for your review!');
    setFormData({ name: '', email: '', review: '', rating: 5 }); // Reset form
  };

  return (
    <div className="reviews-container">
      <h2>Share Your Experience</h2>
      <p>We value your feedback! Please leave a review about our product or service.</p>
      <form onSubmit={handleSubmit} className="reviews-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
