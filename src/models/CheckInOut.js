const mongoose = require('mongoose');

const checkInOutSchema = new mongoose.Schema({
    instructorId: String,
    checkInTime: Date,
    checkOutTime: Date
});

module.exports = mongoose.model('CheckInOut', checkInOutSchema);
