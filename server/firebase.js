const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Inicialize o SDK com as credenciais de serviço
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Exporte a instância inicializada do Firebase Admin
module.exports = admin;
