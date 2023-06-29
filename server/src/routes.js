const express = require('express');
const reservasRouter = require('./routes/reservas');
const pagamentosRouter = require('./routes/pagamentos');
const cancelarReserva = require('./routes/cancelarReserva');
const adicionarVaga = require('./routes/vagas')
const authenticate = require("./middlewares/authenticate");

const home = require('./routes/home')

const router = express.Router();

router.use('/api/reservas', authenticate, reservasRouter);
router.use("/api/vagas", authenticate, adicionarVaga);
router.use("/api/pagamentos", authenticate, pagamentosRouter);
router.use(`/api/reservas/cancelar/`, authenticate, cancelarReserva);

router.use('/', home)

module.exports = router;
