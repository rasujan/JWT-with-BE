const route = require('express').Router();

const { 
  handleLogin,
  handleRegister,
 } = require('../controllers/auth');

route.post("/", handleLogin);
route.post("/register", handleRegister);

module.exports = route;
