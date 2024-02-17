const express = require('express');
const checkinController = require('../controllers/checkinController');
const router = express.Router();

router.post('/', checkinController.checkIn);

module.exports = router;
