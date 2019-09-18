const pool = require('../../database/queries')

export default (req, res) => {
    const {
        method
    } = req

    switch (method) {
        case 'GET':
            getUsers(req, res)
            break

        case 'POST':
            createUser(req, res)
            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}


/**
 * Get the users from the PostgreSQL database
 */
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows)
    })
}

/**
 * Create new users
 */
const createUser = (request, response) => {
    // const { query: { username, email, name, password, role } } = request
    const { username, email, name, password, role } = request.body

    pool.query(
        'INSERT INTO users (username, email, name, password, role) VALUES ($1, $2, $3, $4, $5)',
        [username, email, name, password, role],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(201).send(`User added with ID: ${result.insertId}`)
        })
}