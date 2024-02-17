const express = require('express');
const checkoutController = require('../controllers/checkoutController');
const router = express.Router();

router.post('/', checkoutController.checkOut);

module.exports = router;