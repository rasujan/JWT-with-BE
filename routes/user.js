const route = require('express').Router();
const jwt = require('express-jwt');

const { 
  handleUserGet,
  handleUserGetByID,
  handleUserPut,
  handleUserDelete,
 } = require('../controllers/user');

route.get("/", handleUserGet);
route.get("/:id", handleUserGetByID);
route.put("/:id", handleUserPut);
route.delete("/:id", handleUserDelete);

module.exports = route;
