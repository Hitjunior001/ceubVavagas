const express = require('express');
const reservasRouter = require('./routes/reservas');
const pagamentosRouter = require('./routes/pagamentos');

router.use('/api/reservas', reservasRouter);
router.use('/api/pagamentos', pagamentosRouter);

router.get('/', (req, res) => {
    res.send('Hello, Azure Web router!');
  });

module.exports = router;