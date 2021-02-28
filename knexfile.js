// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'chatterbox'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL, 
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    }
  }

};
