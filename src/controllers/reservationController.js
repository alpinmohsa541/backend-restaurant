const db = require("../config/db");

exports.createReservation = (req, res) => {
  const { userId, restaurantId, reservationDate } = req.body;
  const query =
    "INSERT INTO Reservations (userId, restaurantId, reservationDate) VALUES (?, ?, ?)";
  db.query(query, [userId, restaurantId, reservationDate], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Reservation created successfully");
  });
};
