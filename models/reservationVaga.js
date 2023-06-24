
class Reservation {
  constructor(id, userId, jobId, status, paymentId) {
    this.id = id;
    this.userId = userId;
    this.jobId = jobId;
    this.status = status;
    this.paymentId = paymentId;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  async save() {
    const docRef = await db.collection("reservations").add({
      userId: this.userId,
      jobId: this.jobId,
      status: this.status,
      paymentId: this.paymentId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
    this.id = docRef.id;
  }

  static async getreservationsByUserId(userId) {
    const snapshot = await db
      .collection("reservations")
      .where("userId", "==", userId)
      .get();
    const reservations = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      reservations.push({
        id: doc.id,
        userId: data.userId,
        jobId: data.jobId,
        status: data.status,
        paymentId: data.paymentId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      });
    });
    return reservations;
  }
}

module.exports = Reservation;
