import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import About from './components/About.jsx'
import Event from './components/Event.jsx'
import Contact from './components/Contact.jsx'
import Menu from './components/Menu.jsx'
import Preorder from './components/Preorder.jsx'
import Header from './components/Header.jsx'
import BookingForm from './components/BookingForm.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<App/>}></Route>
   <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/app' element={<App/>}></Route>
    <Route path='/preorder' element={<Preorder/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/event' element={<Event/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/bookingform' element={<BookingForm/>}></Route>
    {/* <Route path='/starter' element={<Starter/>}></Route> */}
   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
  
)
