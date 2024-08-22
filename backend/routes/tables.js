const express = require('express');
const Table = require('../models/Table'); // Path to your Table model
const router = express.Router();

// Check availability of tables
router.get('/availability', async (req, res) => {
    try {
        const availableTables = await Table.find({ isAvailable: true });
        res.json(availableTables);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Book a table
router.post('/book', async (req, res) => {
    const { tableNumber, customerName } = req.body;
    try {
        const table = await Table.findOne({ tableNumber });

        if (!table) {
            return res.status(404).json({ message: 'Table not found' });
        }

        if (!table.isAvailable) {
            return res.status(400).json({ message: 'Table is already booked' });
        }

        table.isAvailable = false;
        table.reservedBy = customerName;
        table.reservedAt = new Date();
        await table.save();

        res.json({ message: 'Table booked successfully', table });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/availability', async (req, res) => {
    try {
        const availableTables = await Table.find({ isAvailable: true });
        res.json(availableTables);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
