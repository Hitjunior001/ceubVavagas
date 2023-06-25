const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Endpoint de pagamentos');
  res.send('Endpoint de pagamentos');
});

module.exports = router;
