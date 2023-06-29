  const express = require('express');
  const routes = require('./src/routes');
  const bodyParser = require('body-parser');
  const firebaseAdmin = require('./firebase');
  const cors = require("cors");

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: "GET, POST, PUT, DELETE",
      allowedHeaders: "Content-Type, Authorization",
    })
  );
  app.use(bodyParser.json());

  // Agora você pode acessar o Firestore como administrador
  const db = firebaseAdmin.firestore();

  app.use(routes);

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
  });