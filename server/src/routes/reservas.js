const express = require('express');
const router = express.Router();

require('dotenv').config();
const stripe = require('stripe')('process.env.STRIPE_API_KEY');



router.post('/', (req, res) => {
  console.log('reservas')
});

module.exports = router;