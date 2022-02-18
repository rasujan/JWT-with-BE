const route = require('express').Router();

const jwt = require('express-jwt');
const jwtRoutes = require('./jwt');
const todoRoutes = require('./todo');

route.use('/jwt', jwtRoutes);
route.use('/todos', todoRoutes);

route.get('/food', jwt({ secret: process.env.JWT_SECRET || "secret123", algorithms: ["HS256"] }), (req, res) => {
  res.json([
    {id: 1, name: 'momo'},
  ]);
});

module.exports = route;
