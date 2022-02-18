const handleJWT = (req, res) => {
  const authData = {
    username: req.body.username || "joe",
    password: req.body.password || "0",
  };
  if (authData.password === "password") {
    res.json({
      token: jsonwebtoken.sign({ user: authData.username }, jwtSecret),
    });
  } else {
    res.status(500).send("The password is password");
  }
}

module.exports = {
  handleJWT,
};
