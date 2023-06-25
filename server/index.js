const express = require('express');
const routes = require('./src/routes');

const app = express();

app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello, Azure Web App!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
