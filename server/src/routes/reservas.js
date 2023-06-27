const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../../firebase');

require('dotenv').config();

// Obtenha uma referência para o Firestore
const db = firebaseAdmin.firestore();

// Defina o endpoint para receber as informações e criar a reserva
router.post('/', (req, res) => {
  // Obtenha os dados enviados pelo Kotlin a partir do corpo da requisição
  const { diasAlugadas, dataReserva, idUsuario, idVaga } = req.body;
  console.log('Dados recebidos:', req.body);

  // Crie um documento no Firestore com as informações da reserva e um ID gerado automaticamente
  const reservaRef = db.collection('reservas').doc(); // Gera um ID aleatório para o documento

  reservaRef
    .set({
      idReserva: reservaRef.id, // Atribui o ID gerado ao campo idReserva
      diasAlugadas,
      dataReserva,
      idUsuario,
      idVaga
    })
    .then(() => {
      // A reserva foi criada com sucesso
      console.log('Reserva criada:', reservaRef.id);
      res.status(201).json({ message: 'Reserva criada com sucesso' });
    })
    .catch((error) => {
      // Ocorreu um erro ao criar a reserva
      console.error('Erro ao criar reserva:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao criar a reserva' });
    });
});

module.exports = router;