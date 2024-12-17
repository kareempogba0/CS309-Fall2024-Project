import React, { useState } from 'react';
import './AdminControl.css';
function AdminControl() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const newProduct = {
            id: new Date().getTime(), 
            name,
            price,
            description,
            image,
            category,
        };

        try {
            const response = await fetch('http://localhost:3000/addproducts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            const data = await response.text();

            if (response.ok) {
                setMessage('Product added successfully!');
                setName('');
                setPrice('');
                setDescription('');
                setImage('');
                setCategory('');
            } else {
                setMessage('Failed to add product: ' + data);
            }
        } catch (error) {
            console.error('Error adding product:', error);
            setMessage('Something went wrong!');
        }
    };

    return (
        <div>
            <h1>Welcome to Admin Control</h1>
            <p>Here you can add new products.</p>

            <div>
                <h3>Add New Product</h3>
                <form onSubmit={handleAddProduct}>
                    <div>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Category:</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add Product</button>
                </form>

                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default AdminControl;
