import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch available tables from the API
        axios.get('/api/tables/availability')
            .then(response => {
                // Check if response.data is an array
                if (Array.isArray(response.data)) {
                    setTables(response.data);
                } else {
                    console.error('Expected an array but received:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching tables:', error);
            });
    }, []);

    const handleBookTable = () => {
        if (!selectedTable || !customerName || !customerEmail) {
            setMessage('Please select a table, enter your name, and provide your email.');
            return;
        }

        // Send booking request to the backend
        axios.post('/api/tables/book', {
            tableNumber: selectedTable,
            customerName,
            customerEmail
        })
        .then(response => {
            setMessage('Table booked successfully!');
            setSelectedTable(null); // Clear selected table
            setCustomerName(''); // Clear name
            setCustomerEmail(''); // Clear email
        })
        .catch(error => {
            console.error('Error booking table:', error);
            setMessage('Failed to book table. Please try again.');
        });
    };

    return (
        <div>
            <h2>Available Tables</h2>
            {Array.isArray(tables) && tables.length > 0 ? (
                <ul>
                    {tables.map(table => (
                        <li key={table._id}>
                            Table {table.tableNumber} - {table.capacity} seats
                            {table.isAvailable ? (
                                <button onClick={() => setSelectedTable(table.tableNumber)}>
                                    Select
                                </button>
                            ) : (
                                <span> (Booked)</span>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tables available</p>
            )}

            <h3>Book a Table</h3>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                </label>
                <button onClick={handleBookTable}>Book Table</button>
            </div>

            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;
