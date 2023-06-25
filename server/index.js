const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello, Azure Web App!');
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 3000');
});