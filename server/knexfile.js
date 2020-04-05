// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './test.sqlite3'
    },
    migrations: {
      tableName: ':memory:'
    }
  },

};
