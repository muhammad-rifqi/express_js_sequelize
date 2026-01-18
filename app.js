const express = require("express");
const { User } = require("./models");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Express + Sequelize OK" });
});

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = app;
