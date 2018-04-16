// Update with your config settings.
const config = require('config');

module.exports = {

  development: {
    client: 'pg',
    connection: config.DATABASE_URL,
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  },

  staging: {
    client: 'postgresql',
    connection: config.DATABASE_URL,
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  },

  production: {
    client: 'postgresql',
    connection: config.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    }
  }
};
