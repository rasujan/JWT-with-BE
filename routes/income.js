const route = require('express').Router();

const { 
  handleIncomeGet,
  handleIncomeGetByID,
  handleIncomePost,
  handleIncomePut,
  handleIncomeDelete,
 } = require('../controllers/income');

route.get("/", handleIncomeGet);
route.get("/:id", handleIncomeGetByID);
route.post("/", handleIncomePost);
route.put("/:id", handleIncomePut);
route.delete("/:id", handleIncomeDelete);

module.exports = route;
