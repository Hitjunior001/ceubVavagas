const express = require('express');
const app = express();
const reservasRouter = require('./routes/reservas');
const pagamentosRouter = require('./routes/pagamentos');

app.use('/api/reservas', reservasRouter);
app.use('/api/pagamentos', pagamentosRouter);

app.get('/', (req, res) => {
    res.send('Hello, Azure Web App!');
  });

module.exports = app;