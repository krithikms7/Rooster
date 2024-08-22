// models/Table.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableNumber: Number,
    isAvailable: Boolean,
    reservedBy: String,
    reservedAt: Date,
    capacity: Number // Additional field for the number of seats
});

module.exports = mongoose.model('Table', tableSchema);
