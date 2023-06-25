const express = require('express');
const router = express.Router();

require('dotenv').config();

router.post('/', (req, res) => {
  console.log('reservas')
});

module.exports = router;