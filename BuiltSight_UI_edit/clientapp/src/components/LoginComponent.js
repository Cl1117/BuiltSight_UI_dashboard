import React from 'react';
import './LoginComponent.css';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className="content-wrapper">
                {/* Greeting section */}
                <div className="greeting-section">
                    <h1>Welcome to BuiltSight</h1>
                    <h2>YOUR GATEWAY TO BETTER CONSTRUCTION INSIGHTS</h2>
                </div>

                {/* Form section */}
                <div className="form-section">
                    <div className="logo-section">
                        <h2>WELCOME BACK</h2>
                        <h3>Let's get started!</h3>
                    </div>

                    {/* Login form */}
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="username">Email or phone number</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" className="login-button">SIGN IN</button>
                    </form>

                    {/* Signup link */}
                    <div className="signup-link">
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>

            {/* Footer section */}
            <footer className="login-footer">
                BuiltSight 2023.
            </footer>
        </div>
    );
}

export default LoginComponent;
