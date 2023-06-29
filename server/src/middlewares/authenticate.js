const admin = require("../../firebase")

// Middleware de autenticação
const authenticate = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Token de autenticação ausente ou inválido." });
  }

  const idToken = authorizationHeader.split("Bearer ")[1];
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      console.log("Usuário é válido");
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error("Erro ao verificar token de autenticação:", error);
      return res
        .status(401)
        .json({ message: "Token de autenticação inválido." });
    });
};

module.exports = authenticate;
