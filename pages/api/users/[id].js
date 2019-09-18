const pool = require('../../../database/queries')

export default (req, res) => {
    const {
        query: { id },
        method
    } = req

    switch (method) {
        case 'GET':
            getUserById(req, res, id)
            break

        case 'PUT':
            updateUser(req, res, id)
            break

        case 'DELETE':
            deleteUser(req, res, id)
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

/**
 * Retrieves the data of a specific user
 */

const getUserById = (request, response, id) => {
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows)
        response.status(200).json(results.rows)
    })
}


/**
 * Updates the data of a specific existing user
 */
const updateUser = (request, response, id) => {
    const { username, email, name, password, role } = request.body

    console.log(request.body)
    pool.query(
        'UPDATE users SET username = $1, email = $2, name = $3, password = $4, role = $5',
        [username, email, name, password, role],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        })
}


/**
 * Delete a specific user
 */
const deleteUser = (request, response, id) => {
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        console.log(`user deleted with id: ${id}`)
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}