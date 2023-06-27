const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const firebaseAdmin = require('./firebase');

const app = express();
app.use(bodyParser.json());

// Agora você pode acessar o Firestore como administrador
const db = firebaseAdmin.firestore();

app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});