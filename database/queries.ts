/**
 * Handles all requests to the PostgreSQL database
 */
import pg from 'pg'
import url from 'url'

const Pool = pg.Pool
// const url = require('url')

// const params = url.parse(process.env.DATABASE_URL)
// const auth = params.auth.split(':')
//
let pool

if (process.env.NODE_ENV === 'production') {
    const params: any = url.parse(process.env.DATABASE_URL)
    const auth: any = params.auth.split(':')

    pool = new Pool({
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    })
} else {
    pool = new Pool({
        user: "admin",
        password: "admin",
        host: "localhost",
        port: 5432,
        database: "follow_the_money"
    })
}

module.exports = pool
