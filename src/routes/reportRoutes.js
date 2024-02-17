const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();

router.get('/:year/:month', reportController.generateMonthlyReport);

module.exports = router;
