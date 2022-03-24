/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
    .alterTable('users', function addProfilePictureToUsers(tableBuilder) {
        tableBuilder.string('profile_picture').defaultTo(null);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('users', function removeProfilePictureFromUsers(tableBuilder) {
        tableBuilder.dropColumn('profile_picture');
    });
};
