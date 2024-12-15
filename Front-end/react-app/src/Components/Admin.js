import React, { useState } from 'react';
import './AdminCss.css';

function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@example.com' && password === 'password123') {
            setIsSignedIn(true);
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div className="admin">
            {isSignedIn ? (
                <h1>Welcome, Admin!</h1>
            ) : (
                <>
                    
                    
                    <div className="signin-form">
                        <h2>Sign In Admin </h2>
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
                            <button onClick={() => setIsSignedIn(true)} type="submit">Sign In</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}

export default Admin;
