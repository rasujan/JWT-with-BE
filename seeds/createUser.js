const { hashPassword } = require('../utils/bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1, 
      name: "admin",
      address: "Lalitpur, Nepal",
      phone: "9841123123",
      email: "admin@gurzu.com",
      password: hashPassword("admin"),
      active: 1,
      date_of_birth: new Date().toISOString(),
    },
  ]);
};
