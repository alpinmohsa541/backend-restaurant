const db = require("../config/db");

exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO Users (username, password) VALUES (?, ?)";
  db.query(query, [username, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("User registered successfully");
  });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM Users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  });
};

exports.updateProfile = (req, res) => {
  const { userId, username, password } = req.body;

  if (!userId || !username || !password) {
    return res
      .status(400)
      .send("All fields are required: userId, username, password");
  }

  const query = "UPDATE Users SET username = ?, password = ? WHERE id = ?";
  db.query(query, [username, password, userId], (err, result) => {
    if (err) {
      return res.status(500).send("Error updating profile");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("Profile updated successfully");
  });
};

exports.getProfile = (req, res) => {
  const { userId } = req.query;
  const query = "SELECT * FROM Users WHERE id = ?";
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results[0]);
  });
};
