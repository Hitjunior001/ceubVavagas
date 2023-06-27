const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../../firebase');

require('dotenv').config();

// Obtenha uma referência para o Firestore
const db = firebaseAdmin.firestore();

// Defina o endpoint para receber as informações e criar a reserva
router.delete('/:idReserva', (req, res) => {
    const idReserva = req.params.idReserva;

    // Verifique se o ID da reserva foi fornecido
    if (!idReserva) {
      return res.status(400).json({ error: 'ID da reserva não fornecido' });
    }
    // Acesse a coleção 'reservas' no Firestore e exclua o documento com o ID da reserva
    const reservaRef = db.collection('reservas').doc(idReserva);
    reservaRef.delete()
      .then(() => {
        // Reserva cancelada com sucesso
        res.json({ message: 'Reserva cancelada com sucesso' });
      })
      .catch((error) => {
        console.error('Erro ao cancelar reserva:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao cancelar a reserva' });
      });
  });

module.exports = router;
