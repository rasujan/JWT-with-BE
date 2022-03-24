const route = require('express').Router();
const upload = require('../utils/multer');
const { 
  handleLogin,
  handleRegister,
 } = require('../controllers/auth');

route.post("/", handleLogin);
route.post("/register", upload.single('profile_picture'), handleRegister);

module.exports = route;
