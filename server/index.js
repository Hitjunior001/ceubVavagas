const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



app.use(routes);

app.get('/', (req, res) => {
  const { diaAlugado, idUsuario } = req.body;

  // Lógica para processar a reserva

  // Exemplo de resposta de sucesso
  res.json({ success: true });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
