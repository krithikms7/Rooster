import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                toast("Registration successful");
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
                toast("Registration failed");
            });
    };

    return (
        <div className='log-bg'>
            <div className='login-container'>
                <div className='login-form'>
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                autoComplete='off'
                                name="name"
                                required
                                className='inputbox'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'>
                                <strong>Email</strong>
                            </label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                autoComplete='off'
                                name="email"
                                required
                                className='inputbox'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>
                                <strong>Password</strong>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                autoComplete='off'
                                name="password"
                                required
                                className='inputbox'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-0 '>
                            Register
                        </button>
                    </form>
                    <p className='links'>Already have an account?
                    <Link to='/login' >
                        Login
                    </Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Register;
