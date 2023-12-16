const express = require('express');
const currencyController = require('../controllers/currencyController');

const router = express.Router();

router.post('/convert', currencyController.convertCurrency);
router.post('/create', currencyController.createCurrency);
router.get('/', currencyController.getAllCurrencies);

module.exports = router;