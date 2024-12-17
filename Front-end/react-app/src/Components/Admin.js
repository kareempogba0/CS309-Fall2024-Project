import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminCss.css';

function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'password123') {
            navigate('/AdminControl');
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="admin">
            <div className="signin-form">
                <h2>Sign In Admin</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;
