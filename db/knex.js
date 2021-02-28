const environment = process.env.DB_ENV || 'development'
const configuration = require('../knexfile')[environment]
module.exports = require('knex')(configuration)
