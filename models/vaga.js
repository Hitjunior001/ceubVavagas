const firestore = require("../firebaseStore");

class Vaga {
  constructor(title, description, localizacao) {
    this.title = title;
    this.description = description;
    this.localizacao = localizacao;
    this.createdAt = firestore.Timestamp.now().toDate();
    this.updatedAt = firestore.Timestamp.now().toDate();
  }

  async save() {
    try {
      const docRef = await firestore.collection("vagas").add({
        title: this.title,
        description: this.description,
        localizacao: this.localizacao,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
      });
      this.id = docRef.id;
      return this.id;
    } catch (error) {
      throw new Error("Erro ao salvar a vaga: " + error);
    }
  }

  static async getAllVagas() {
    const snapshot = await firestore.collection("vagas").get();
    const vagas = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      vagas.push({
        id: doc.id,
        title: data.title,
        description: data.description,
        localizacao: data.localizacao,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      });
    });
    return vagas;
  }
}

module.exports = Vaga;
