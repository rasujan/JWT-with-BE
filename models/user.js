const knex = require('../db/config');

const TABLE_NAME = 'users';

const get = () => {
  return knex(TABLE_NAME).select();
};

const getByID = (id) => {
  return knex(TABLE_NAME).select().where({ id }).first();
};

const getUserByEmail = (email) => {
  return knex(TABLE_NAME).select().where({ email }).first();
};

const post = (payload) => {
  return knex(TABLE_NAME).insert(payload);
};

const put = (id, payload) => {
  return knex(TABLE_NAME).update(payload).where({ id });
};

const del = (id) => {
  return knex(TABLE_NAME).del().where({
    id,
  });
};

module.exports = {
  get,
  getByID,
  getUserByEmail,
  post,
  put,
  del,
}
