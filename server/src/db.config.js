const { Model } = require('objection');
const Knex = require('knex')

const ENV = process.env.NODE_ENV || 'development'

let knex
if (ENV === 'test'){
    knex = Knex({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {filename: 'test.sqlite3'}
    })
} else {
    knex = Knex({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {filename: 'dev.sqlite3'}
    })
}

Model.knex(knex);
