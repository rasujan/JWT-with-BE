const jsonwebtoken = require("jsonwebtoken");

const signJWT = (user) => {
  const { password, ...others } = user;

  return jsonwebtoken.sign({ ...others }, process.env.JWT_SECRET || "secret123", {
    expiresIn: "1day"
  });
};

const verifyJWT = (jwt) => {
  return jsonwebtoken.verify(jwt, process.env.JWT_SECRET || "secret123")
}

module.exports = {
  signJWT,
  verifyJWT,
};
