const express = require("express");
const router = express.Router();
const firebaseAdmin = require("../../firebase");

require("dotenv").config();

// Obtenha uma referência para o Firestore
const db = firebaseAdmin.firestore();

// Defina o endpoint para receber as informações e criar a reserva
router.post("/", (req, res) => {
  const { name, location } = req.body;
  const availability = true

  // Crie um documento no Firestore com as informações da reserva e um ID gerado automaticamente
  const vagaRef = db.collection("vagas").doc(); // Gera um ID aleatório para o documento

  vagaRef
    .set({
      idVaga: vagaRef.id, // Atribui o ID gerado ao campo idReserva
      name,
      location,
      availability,
    })
    .then(() => {
      // A reserva foi criada com sucesso
      console.log("Vaga criada:", vagaRef.id);
      res.status(201).json({ message: "Vaga criada com sucesso" });
    })
    .catch((error) => {
      // Ocorreu um erro ao criar a reserva
      console.error("Erro ao criar a vaga:", error);
      res.status(500).json({ error: "Ocorreu um erro ao criar a vaga" });
    });
});

module.exports = router;
