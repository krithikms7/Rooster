import React from 'react'
import rooster from '../assets/rooster.png';
import halal from '../assets/halal.png';
import '../App.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <div className='header'>
    <img src={rooster} width={100} height={100} alt='Rooster Logo' />
    
    <h1><b>Rooster Restaurant</b></h1>
    <nav>
      <ul className='headerheading'>
        <Link to={'/event'} className='link'>Event</Link>
        <Link to={'/menu'} className='link'>Menu</Link>
        <Link to={'/about'} className='link'>About</Link>
        <Link to={'/bookingform'} className='link'>BookingForm</Link>
        <Link to={'/contact' } className='link'>Contact</Link>
      
      <button className='login-btn'><a href='/login'>LogIn</a></button>
      <button className='register-btn'><a href='/register'>Register</a></button>
      </ul>
    </nav>
    <div className='logo img'>
      <img src={halal} width={80} height={80} alt='Halal Logo' />
    </div></div>
    </>
  )
}

export default Header