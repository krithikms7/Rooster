import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:3001/login', { email, password });

            // Show the result in a toast notification
            toast(result.data);

            if (result.data === "success") {
                // Store the user's email in local storage
                localStorage.setItem('userEmail', email);
                // Navigate to the desired route
                navigate('/app');
            }
        } catch (err) {
            console.error(err);
            // Show an error notification
            toast.error('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='log-bg'>
            <div className='login-container'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>Email</strong>
                            </label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                autoComplete='on'
                                name="email"
                                className='inputbox'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} // Add this line for controlled input
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>
                                <strong>Password</strong>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                autoComplete='on'
                                name="password"
                                className='inputbox'
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} // Add this line for controlled input
                            />
                        </div>
                        <button type='submit' className='btn btn-success m'>
                            Login
                        </button>
                    </form>
                    <p className='links'>Don't Have an account?
                        <Link to='/'>
                            Register
                        </Link>
                    </p>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;