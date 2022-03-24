const route = require('express').Router();
const upload = require('../utils/multer');

const { 
  handleUserGet,
  handleUserGetByID,
  handleUserPut,
  handleUserDelete,
 } = require('../controllers/user');

route.get("/", handleUserGet);
route.get("/:id", handleUserGetByID);
route.put("/:id", upload.single('profile_picture'), handleUserPut);
route.delete("/:id", handleUserDelete);

module.exports = route;
