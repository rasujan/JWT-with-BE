const bcrypt = require("bcryptjs");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 3);
}

const comparePasswords = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  hashPassword,
  comparePasswords,
}
