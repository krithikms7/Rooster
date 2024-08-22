import React, { useState } from 'react';
import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';  
import './menu.css';

function Menu() {
  const [cart, setCart] = useState({});
  const GST_RATE = 0.18; // 18% GST

  const handleAddToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart[item.id];
      const updatedItem = existingItem
        ? { ...existingItem, quantity: existingItem.quantity + 1 }
        : { ...item, quantity: 1 };
      return { ...prevCart, [item.id]: updatedItem };
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart[item.id];
      if (!existingItem) return prevCart;

      if (existingItem.quantity === 1) {
        const { [item.id]: _, ...rest } = prevCart; // Remove item if quantity is 1
        return rest;
      } else {
        return {
          ...prevCart,
          [item.id]: { ...existingItem, quantity: existingItem.quantity - 1 }
        };
      }
    });
  };

  const handlePayment = async () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const upiPaymentUrl = `upi://pay?pa=example@upi&pn=YourName&mc=0000&tid=1234567890&tn=Payment+for+Order&am=${totalWithGST.toFixed(2)}&cu=INR&url=https://example.com`;
  
    if (isMobile) {
      // Redirect to UPI payment URL on mobile
      window.location.href = upiPaymentUrl;
  
      // Send acknowledgment email
      const userEmail = localStorage.getItem('userEmail'); // Get the stored email
  
      if (!userEmail) {
        alert('User email is not available. Please log in again.');
        return;
      }
  
      try {
        const emailResponse = await fetch('/api/sendAcknowledgment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userEmail, // Use the logged-in user's email here
            subject: 'Payment Acknowledgment',
            message: `Your payment of ₹${totalWithGST.toFixed(2)} has been successfully processed.`,
          }),
        });
  
        if (emailResponse.ok) {
          alert('Payment successful and acknowledgment email sent.');
        } else {
          alert('Payment successful but failed to send acknowledgment email.');
        }
      } catch (error) {
        alert('Payment successful but failed to send acknowledgment email.');
        console.error('Error sending acknowledgment email:', error);
      }
    } else {
      // Fallback for desktop users
      alert('Please complete the payment using a mobile device with a UPI app.');
    }
  };
  

  const menuItems = [
    { id: 1, title: 'Tandoori Full', price: 400, img: 'https://sinfullyspicy.com/wp-content/uploads/2023/11/1200-by-1200-images-2.jpg' },
    { id: 2, title: 'Peri-Peri Tandoori', price: 420, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKcW9DqBg04QKGAikAHUJwG3RRrQRQLm5sA&s' },
    { id: 3, title: 'Dragon Chicken', price: 230, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sUIF96uLFRMdwImypLAbJHVBO2IAtRhkQg&s' },
    { id: 4, title: 'Japan Chicken', price: 200, img: 'https://img.vanitha.in/content/dam/vanitha/pachakom/recipe-of-the-day/images/2023/7/14/japan%20chicken.jpg' },
    { id: 5, title: 'Chicken Lolipop', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf7xjWzgnbQeizzlJyJtODXWUjOCTZz7GVQ&s' },
    { id: 6, title: 'Leg piece', price: 80, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUyean_oIs1YSWkbfstH_pUzM6YxGgbN55A&s' },
    { id: 7, title: 'Tandoori Leg Piece(2 piece)', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-H2XaxNL6WQ7PAlfeSHUmFhN2K1vwF6sHnA&s' },
    { id: 8, title: 'Chicken 65 (B/L)', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsj0gK_A3mbiPvTRrs_WyvJDwPPmAqSlfgn5_nG_MvZQ90b9zdhxqSOCSVS6eqnmReAM&usqp=CAU' },
    { id: 9, title: 'Sivakasi Chicken (B/L)', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjKHwqQ3OR58i5lh_oMng2dqeP_WPNgociQA&s' },
    { id: 10, title: 'Garlic Chicken', price: 180, img: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Garlic-Chicken.jpg' },
    { id: 11, title: 'Chicken Pepper Fry', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDqZ_f0gCcfeNr9es5s8nro3NeLD6K9gW1w&s' },
    { id: 12, title: 'Chicken Pakoda', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUqmIwA_BOuQnMNZCD0a8PDmNHRFYz5dJ5g&s' },
    { id: 13, title: 'Chicken Uppucurry', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6glcyrJd-oOd22ewKvPNimJV1klkTDFzKig&sttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 14, title: 'Chicken Pallipalayam', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8vAnzR-ar8DaEm7jyiG-KZwQw0QXkLNpdA&ss://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 15, title: 'Chicken Chinthamani', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFU9bSc040bV0zPY3sZwsPABuFL63382edKg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 16, title: 'Chicken Nallampatti', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUT9pMXXqxqDWROyrStkjwV0koLM5yuyjI1w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 17, title: 'Chicken Milagai Curry', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStf3K_9UtRN3SxaKIR6T5UjWBm0U87iX-zIw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 18, title: 'Chicken Chettinad Fry', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7X0EcPccbofNSy76R8Sm_dHfOuTgzFtGpQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 19, title: 'Chicken Varuval', price: 150, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkBikuzpCqQdhVXWxqczA4gLMTkQxIANp9w&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxpLXZMy6Oq6eWyC7cn7m2oerJ5j_DOvVCw&s' },
    { id: 20, title: 'Chicken Maharani', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mvuGx5qddFsUfPb2qa-jE_D8DwmPpRk3vQ&s'},
    { id: 21, title: 'Chicken Hyderabadi', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3brZjj0r2oUFpTe6V34MptW429Hp_G6swpw&s'},
    { id: 22, title: 'Chicken Dynamic', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHiv1Uf_LjWve88Fh90f0sk0Ne1DmtxepIg&s'},
    { id: 23, title: 'Chicken Monica', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUmNwGOTjhT2PhIjJPZON2_EfhXxmLEGz_A&s'},
    { id: 24, title: 'Chicken Manchurian', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0gh_MfFUOcADW5rsTxAPGDHHxeGPj7elOg&s'},
    { id: 25, title: 'Chicken Hot Pepper Fry', price: 180, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXhROl1d8k5cE_zGjIi1rDRWMrOxF7VnYKA&s'},
    { id: 26, title: 'Malabar Chicken', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRakgUxEpR2LVo85T7a5F8srT5pqWXHMQz7w&s'},
    { id: 27, title: 'French Chicken', price: 200, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgvQpwt9Sj7s8bPBEcZTbrlH3jbnzHTjV8g&s'},
    { id: 28, title: '555 Chicken ', price: 220, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNeaJmgQS9xRqjr9uAq9rNDClVV8O5TjpBA&s'},
    { id: 29, title: '007 Chicken', price: 220, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQepozNVzIoN-bJe2nx0StNMDTtYSiM1SbdQ&s'},
    { id: 30, title: 'Rooster Special Methi Chicken', price: 240, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbAXY1geFLUbsXqx67nsGq0L1N37N_uN_4A&s'},
    { id: 31, title: 'Malabar Chicken', price: 200, img: ''},
    { id: 32, title: 'Malabar Chicken', price: 200, img: ''},
    { id: 33, title: 'Malabar Chicken', price: 200, img: ''},
    { id: 34, title: 'Malabar Chicken', price: 200, img: ''},
  ]

  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = Object.values(cart).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gstAmount = totalPrice * GST_RATE;
  const totalWithGST = totalPrice + gstAmount;

  return (
    <>
      <div className='m-bg'>
        <div className='text-style'>Rooster Menu</div>
        
        <div className='cart-icon-container'>
          <FaShoppingCart size={30} />
          {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
          <div className='cart-dropdown'>
            <h2>Your Cart</h2>
            {totalItems > 0 ? (
              <>
                <ul>
                  {Object.values(cart).map((item) => (
                    <li key={item.id}>
                      {item.title} - ₹{item.price} x {item.quantity}
                      <div className='cart-item-actions'>
                        <button onClick={() => handleAddToCart(item)}>+</button>
                        <button onClick={() => handleRemoveFromCart(item)}>-</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <h3>Subtotal: ₹{totalPrice.toFixed(2)}</h3>
                <h3>GST (18%): ₹{gstAmount.toFixed(2)}</h3>
                <h3>Total: ₹{totalWithGST.toFixed(2)}</h3>
                <button className='payment-button' onClick={handlePayment}>Proceed to Payment</button>
              </>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className='m1-bg'>
        <div className='menu-mainbox'>
          {menuItems.map(item => (
            <div className='menu-innerbox' key={item.id}>
              <img src={item.img} alt={item.title} className="menu-image" />
              <h3 className="menu-title">{item.title} - ₹{item.price}</h3>
              <button className="menu-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
