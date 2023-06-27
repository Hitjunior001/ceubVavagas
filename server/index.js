const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const admin = require("firebase-admin");

const app = express();
app.use(bodyParser.json());

// Inicialize o SDK com as credenciais de serviço
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Agora você pode acessar o Firestore como administrador
const db = admin.firestore();


app.use(routes);

app.get('/', (req, res) => {

});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
