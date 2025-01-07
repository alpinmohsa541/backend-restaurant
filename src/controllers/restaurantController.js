const db = require("../config/db");

exports.getRestaurants = (req, res) => {
  const query = "SELECT * FROM Restaurants";
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};
