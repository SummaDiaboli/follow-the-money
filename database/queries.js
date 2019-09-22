/**
 * Handles all requests to the PostgreSQL database
 */

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'follow_the_money',
    password: 'admin',
    port: 5432
})

module.exports = pool