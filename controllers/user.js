const {
  get,
  getByID,
  put,
  del,
} = require('../models/user');

const handleUserGet = async (req, res) => {
  const users = await get();
  res.json({ users });
};

const handleUserGetByID = async (req, res) => {
  const user = await getByID(req.params.id);
  res.json(user);
};

const handleUserPut = async (req, res) => {
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
    password,
    active,
    date_of_birth,
  };

  if(req?.file?.filename)
    payload.profile_picture = req.file.filename;

  const user = await put(req.params.id, payload);
  res.json({
    user: {
      name,
      address,
      phone,
      email,
      password,
      active,
      date_of_birth,
    }
  });
};

const handleUserDelete = async (req, res) => {
  const user = await del(req.params.id);
  res.json({user: req.params.id});
};

module.exports = {
  handleUserGet,
  handleUserGetByID,
  handleUserPut,
  handleUserDelete,
}
