const express = require("express");
const path = require("path");
const Vaga = require("./models/vaga");
const admin = require("firebase-admin");

const app = express();
const router = express.Router();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota para a página de login
router.get("/login", (req, res) => {
  res.render("./login.ejs"); // Renderiza o arquivo createVaga.ejs
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Autenticar o administrador usando o email e senha fornecidos
    const userCredential = await admin
      .auth()
      .signInWithEmailAndPassword(email, senha);

    // Verificar se o usuário autenticado é um administrador
    const adminSnapshot = await admin
      .firestore()
      .collection("admins")
      .doc(userCredential.user.email)
      .get();
    if (!adminSnapshot.exists) {
      // Se o usuário não for um administrador, retorna um erro ou redireciona para uma página de acesso negado
      return res.status(403).send("Acesso negado");
    }

    // Autenticação bem-sucedida, redireciona o administrador para uma página protegida
    res.redirect("/admin-dashboard");
  } catch (error) {
    console.error("Erro ao autenticar administrador:", error);
    // Se ocorrer um erro durante a autenticação, retorna uma mensagem de erro ou redireciona para uma página de erro
    res.status(500).send("Erro ao autenticar administrador");
  }
});

// Rota para a página de criação de vagas
router.get("/cadastrar-vagas", (req, res) => {
  res.render("./createVaga.ejs"); // Renderiza o arquivo createVaga.ejs
});
router.post("/vagas", async (req, res) => {
  const { title, description, localizacao } = req.body;

  // Cria uma nova instância da classe Vaga
  const vaga = new Vaga(title, description, localizacao);

  try {
    // Salva a vaga no Firestore
    const vagaId = await vaga.save();
    console.log("Vaga criada com sucesso:", vagaId);

    // Redireciona para a página de listagem de vagas ou exibe uma mensagem de sucesso
    res.redirect("/vagas");
  } catch (error) {
    console.error("Erro ao criar vaga:", error);
    // Redireciona para uma página de erro ou exibe uma mensagem de erro
    res.redirect("/error");
  }
});

module.exports = router;
