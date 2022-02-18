const {
  get,
  getById,
  post,
  put,
  del,
} = require('../models/todo');

const handleTodoGet = async (req, res) => {
  const todo = await get();
  res.json({ todos: todo });
};

const handleTodoGetByID = async (req, res) => {
  const todo = await getByID(req.params.id);
  res.json(todo);
};

const handleTodoPost = async (req, res) => {
  const { text, color, completed } = req.body;
  const payload = { text, color, completed };
  const [id] = await post(payload);
  res.json({
    todo: {
      ...payload,
      id,
    }
  });
};

const handleTodoPut = async (req, res) => {
  const { text, color, completed } = req.body;
  const todo = await put(req.params.id, { text, color, completed });
  res.json(todo);
};

const handleTodoDelete = async (req, res) => {
  const todo = await del(req.params.id);
  res.json({todo: req.params.id});
};

module.exports = {
  handleTodoGet,
  handleTodoGetByID,
  handleTodoPost,
  handleTodoPut,
  handleTodoDelete,
}
