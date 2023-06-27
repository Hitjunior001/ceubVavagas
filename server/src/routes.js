const express = require('express');
const reservasRouter = require('./routes/reservas');
const pagamentosRouter = require('./routes/pagamentos');
const cancelarReserva = require('./routes/cancelarReserva');

const home = require('./routes/home')

const router = express.Router();

router.use('/api/reservas', reservasRouter);
router.use('/api/pagamentos', pagamentosRouter);
router.use(`/api/reservas/cancelar/`, cancelarReserva);

router.use('/', home)

module.exports = router;
