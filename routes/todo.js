const route = require('express').Router();

const { 
  handleTodoGet,
  handleTodoGetByID,
  handleTodoPost,
  handleTodoPut,
  handleTodoDelete,
 } = require('../controllers/Todo');

route.get("/", handleTodoGet);
route.get("/:id", handleTodoGetByID);
route.post("/", handleTodoPost);
route.put("/:id", handleTodoPut);
route.delete("/:id", handleTodoDelete);

module.exports = route;
