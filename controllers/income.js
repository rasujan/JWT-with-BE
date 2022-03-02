const {
  get,
  getByID,
  post,
  put,
  del,
} = require('../models/income');

const handleIncomeGet = async (req, res) => {
  const incomes = await get();
  res.json({ incomes });
};

const handleIncomeGetByID = async (req, res) => {
  const income = await getByID(req.params.id);
  res.json(income);
};

const handleIncomePost = async (req, res) => {
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
    income: {
      ...payload,
      id,
    }
  });
};

const handleIncomePut = async (req, res) => {
  const { 
    title,
    amount,
    date,
   } = req.body;
  const income = await put(req.params.id, { 
    title,
    amount,
    date,
    updated_at: new Date().toISOString()
   });
  res.json(income);
};

const handleIncomeDelete = async (req, res) => {
  const income = await del(req.params.id);
  res.json({income: req.params.id});
};

module.exports = {
  handleIncomeGet,
  handleIncomeGetByID,
  handleIncomePost,
  handleIncomePut,
  handleIncomeDelete,
}
