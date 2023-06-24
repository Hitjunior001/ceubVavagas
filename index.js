const express = require("express");
const app = express();
const routes = require("./routes");
const firestore = require("./firebaseStore");

// Inicializa o Firestore
//Permite pegar os dados do body.
app.use(express.urlencoded({ extended: true }));
// Usar as rotas definidas no módulo routes
app.use(routes);

// Resto do código do seu servidor

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
