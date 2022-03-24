const {
  get,
  getByID,
  post,
  put,
  del,
} = require('../models/expense');

const handleExpenseGet = async (req, res) => {
  const expenses = await get();
  res.json({ expenses });
};

const handleExpenseGetByID = async (req, res) => {
  const expense = await getByID(req.params.id);
  res.json(expense);
};

const handleExpensePost = async (req, res) => {
  const { 
    title,
    amount,
    date,
   } = req.body;
  const payload = { 
    title,
    amount,
    date,
    created_at: new Date().toISOString()
   };
  const [id] = await post(payload);
  res.json({
    expense: {
      ...payload,
      id,
    }
  });
};

const handleExpensePut = async (req, res) => {
  const { 
    title,
    amount,
    date,
   } = req.body;
  const expense = await put(req.params.id, { 
    title,
    amount,
    date,
    updated_at: new Date().toISOString()
   });
  res.json({
    expense: {
      title, 
      amount, 
      date,
    }
  });
};

const handleExpenseDelete = async (req, res) => {
  const expense = await del(req.params.id);
  res.json({expense: req.params.id});
};

module.exports = {
  handleExpenseGet,
  handleExpenseGetByID,
  handleExpensePost,
  handleExpensePut,
  handleExpenseDelete,
}
