const express = require("express");
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const jwtSecret = "secret123";

app.post("/jwt", (req, res) => {
  const authData = {
    username: req.body.username || "joe",
    password: req.body.password || "0",
  };
  if (authData.password === "password") {
    res.json({
      token: jsonwebtoken.sign({ user: authData.username }, jwtSecret),
    });
  } else {
    res.status(500).send("The password is password");
  }
});

app.use(jwt({ secret: jwtSecret, algorithms: ["HS256"] }));

const foods = [
  { id: 1, description: "Momo" },
  { id: 2, description: "Chowmin" },
  { id: 3, description: "Roti" },
];

app.get("/foods", (req, res) => {
  res.json(foods);
});

app.listen(3001);
console.log("App running on localhost:3001");
