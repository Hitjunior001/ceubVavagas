const express = require('express');
const reservasRouter = require('./routes/reservas');
const pagamentosRouter = require('./routes/pagamentos');
const home = require('./routes/home')

const router = express.Router();

router.use('/api/reservas', reservasRouter);
router.use('/api/pagamentos', pagamentosRouter);
router.use('/', home)

module.exports = router;
