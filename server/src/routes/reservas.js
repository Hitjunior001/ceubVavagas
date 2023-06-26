const express = require('express');
const router = express.Router();

require('dotenv').config();

router.post('/', (req, res) => {
  const { diaAlugado, idUsuario } = req.body;

  // Lógica para processar a reserva

  // Exemplo de resposta de sucesso
  res.json({ success: true });
});

module.exports = router;