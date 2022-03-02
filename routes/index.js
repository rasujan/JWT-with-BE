const route = require('express').Router();
const jwt = require('express-jwt');

const authRoutes = require('./auth');
const todoRoutes = require('./todo');
const incomeRoutes = require('./income');
const expenseRoutes = require('./expense');
const userRoutes = require('./user');

route.use('/todos', todoRoutes);
route.use('/income', jwt({ secret: process.env.JWT_SECRET || "secret123", algorithms: ["HS256"] }), incomeRoutes);
route.use('/expense', jwt({ secret: process.env.JWT_SECRET || "secret123", algorithms: ["HS256"] }), expenseRoutes);
route.use('/auth', authRoutes);
route.use('/users', jwt({ secret: process.env.JWT_SECRET || "secret123", algorithms: ["HS256"] }), userRoutes);

module.exports = route;
