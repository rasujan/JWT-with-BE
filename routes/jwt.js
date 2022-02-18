const route = require('express').Router();

const { handleJWT } = require('../controllers/jwt');

route.post("/", handleJWT);

module.exports = route;
