const {
  getUserByEmail,
  post,
} = require('../models/user');
const { comparePasswords, hashPassword } = require('../utils/bcrypt');
const { signJWT } = require('../utils/jwt');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if(user) {
    const passwordCorrect = comparePasswords(password, user.password);

    if(passwordCorrect) {
      res.json({
        token: signJWT(user),
      });
    } else {
      res.status(401).send({
        error: "Invalid Credentials",
      })
    }
  } else {
    res.status(401).send({
      error: "Invalid Credentials",
    })
  }
};

const handleRegister = async (req, res) => {
  const { 
    name,
    address,
    phone,
    email,
    password,
    active,
    date_of_birth,
   } = req.body;

  const payload = { 
    name,
    address,
    phone,
    email,
    password: hashPassword(password),
    active,
    date_of_birth,
   };

  const [id] = await post(payload);
  res.json({
    user: {
      ...payload,
      id,
    },
    token: signJWT({ 
      ...payload,
      id, 
    }),
  });
};

module.exports = {
  handleLogin,
  handleRegister,
}
