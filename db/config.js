const { 
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
 } = process.env;

const config = require('../knexfile.js');
 const knex = require('knex')(config.development);

module.exports = knex;
