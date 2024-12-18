import React, { useState } from 'react';
import './AdminControl.css';
function AdminControl() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');
    const [currentForm, setCurrentForm] = useState('add');

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

    /*============================*/
    const renderForm = () => {
        if (currentForm === 'add') {
            return (
                <form onSubmit={handleAddProduct}>
                    <h3 className="form-h3">Add New Product</h3>
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
            );
        } else if (currentForm === 'update') {
            return (
                <form>
                    <h3 className="form-h3">Update Product</h3>
                    <div>
                        <label>Product ID:</label>
                        <input type="text" placeholder="Enter Product ID" required />
                    </div>
                    <div>
                        <label>New Name:</label>
                        <input type="text" placeholder="Enter new name" />
                    </div>
                    <div>
                        <label>New Price:</label>
                        <input type="number" placeholder="Enter new price" />
                    </div>
                    <div>
                        <label>New Description:</label>
                        <input type="text" placeholder="Enter new description" />
                    </div>
                    <div>
                        <label>New Image URL:</label>
                        <input type="text" placeholder="Enter new image URL" />
                    </div>
                    <button type="submit">Update Product</button>
                </form>
            );
        } else if (currentForm === 'delete') {
            return (
                <form>
                    <h3 className="form-h3">Delete Product</h3>
                    <div>
                        <label>Product ID:</label>
                        <input type="text" placeholder="Enter Product ID to delete" required />
                    </div>
                    <button type="submit">Delete Product</button>
                </form>
            );
        }
    };
    /*============================*/

    return (
        // <div className='container'>
        //     <div className='wel-div'>
        //     <h1>Welcome to Admin Control</h1>

        //     <div className='options'>
        //         <h4>Add</h4>
        //         <h4>Update</h4>
        //         <h4>Delete</h4>
        //     </div>
            
        //     </div>

        //     <div>
                
        //         <form>
        //         <h3 className='form-h3'>Add New Product</h3>
        //             <div>
        //                 <label>Product Name:</label>
        //                 <input
        //                     type="text"
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                     required
        //                 />
        //             </div>
        //             <div>
        //                 <label>Price:</label>
        //                 <input
        //                     type="number"
        //                     value={price}
        //                     onChange={(e) => setPrice(e.target.value)}
        //                     required
        //                 />
        //             </div>
        //             <div>
        //                 <label>Description:</label>
        //                 <input
        //                     type="text"
        //                     value={description}
        //                     onChange={(e) => setDescription(e.target.value)}
        //                     required
        //                 />
        //             </div>
        //             <div>
        //                 <label>Image URL:</label>
        //                 <input
        //                     type="text"
        //                     value={image}
        //                     onChange={(e) => setImage(e.target.value)}
        //                     required
        //                 />
        //             </div>
        //             <div>
        //                 <label>Category:</label>
        //                 <input
        //                     type="text"
        //                     value={category}
        //                     onChange={(e) => setCategory(e.target.value)}
        //                     required
        //                 />
        //             </div>
        //             <button onSubmit={handleAddProduct} type="submit">Add Product</button>
        //         </form>

        //         {message && <p>{message}</p>}
        //     </div>
        // </div>

        <div className="container">
        <div className="wel-div">
            <h1>Welcome to Admin Control</h1>
            <div className="options">
                <h4 onClick={() => setCurrentForm('add')}>Add</h4>
                <h4 onClick={() => setCurrentForm('update')}>Update</h4>
                <h4 onClick={() => setCurrentForm('delete')}>Delete</h4>
            </div>
        </div>

        <div>
            {renderForm()} {/* Render the appropriate form based on currentForm */}
            {message && <p>{message}</p>}
        </div>
    </div>
    );
}

export default AdminControl;
