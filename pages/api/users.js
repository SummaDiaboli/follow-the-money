// import pool from '../../database/queries.js'
const pool = require('../../database/queries')

export default (req, res) => {
    const {
        // query: { username, password },
        method
    } = req

    // console.log(req.query)

    switch (method) {
        case 'GET':
            getUser(req, res)
            break

        case 'POST':
            createUser(req, res)
            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
    }
}


/**
 * Get the users from the PostgreSQL database
 */
/* const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows)
    })
} */

/**
 * Check if user is in PostgreSQL database
 */
const getUser = (request, response) => {
    const { username, password } = request.query
    pool.query('SELECT * FROM users WHERE username = $1 AND password = $2',
        [username, password],
        (error, result) => {
            if (error) {
                response.status(500)
            }
            if (result.rows.length === 0) {
                // console.log("User doesn't exist")
                return response.status(406).send("User does not exist")
            } else {
                // console.log(result.rows.length)
                response.status(200).json(result.rows)
            }
        })
}



/**
 * Create new users
 */
const createUser = (request, response) => {
    // const { query: { username, email, name, password, role } } = request
    const { username, email, name, password, role, address } = request.body

    pool.query(
        'INSERT INTO users (username, email, name, password, role, address, register_date, register_time) \
        VALUES ($1, $2, $3, $4, $5, $6, current_date, current_time)',
        [username, email, name, password, role, address],
        (error, result) => {
            if (error) {
                // throw error
                return response.status(500).send(`User already exists`)
                // console.log(error)
            }
            response.status(201).send(result)
        })
}