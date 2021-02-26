exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary()
      table.string('user').unique()
      table.string('password')

      table.timestamps(true,true)
    })
    .createTable('messages', function (table) {
      table.increments('id').primary()
      table.string('message')
      table.string('user_name').unsigned()
      table.foreign('user_name')
        .references('users.user')

      table.timestamps(true, true)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('messages')
    .dropTable('users')
};
