const route = require('express').Router();

const { 
  handleExpenseGet,
  handleExpenseGetByID,
  handleExpensePost,
  handleExpensePut,
  handleExpenseDelete,
 } = require('../controllers/expense');

route.get("/", handleExpenseGet);
route.get("/:id", handleExpenseGetByID);
route.post("/", handleExpensePost);
route.put("/:id", handleExpensePut);
route.delete("/:id", handleExpenseDelete);

module.exports = route;
