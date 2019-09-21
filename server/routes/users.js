const pool = require('../../database/queries')

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        // console.log("Current users are:", results.rows)
        res.status(200).send(`Current users are: ${results.rows}`)
    })
}

const getUserById = (req, res) => {
    // const id = req.query.id
    const { id } = req.params

    pool.query('SELECT * FROM users WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error
        }
        // console.log("The user is:", results.rows)
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    const { username, email, name, password, role, address } = req.body

    pool.query(
        'INSERT INTO users (username, email, name, password, role, address, register_date, register_time) \
        VALUES ($1, $2, $3, $4, $5, $6, current_date, current_time)',
        [username, email, name, password, role, address],
        (error, result) => {
            if (error) {
                // throw error
                // console.log(error)
            }
            res.status(201).send(`User added with ID: ${result}`)
        })
}

const updateUser = (req, res) => {
    const { username, email, name, password, role, mobile, about, photo } = req.body
    // const { id } = req.query
    const { id } = req.params

    pool.query(
        'UPDATE users SET username = $1, email = $2, name = $3, password = $4, role = $5,  mobile = $7, about = $8, photo = $9 WHERE id = $6',
        [username, email, name, password, role, mobile, about, photo, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`User modified with ID: ${id}`)
        })
}

const deleteUser = (req, res) => {
    // const { id } = req.query
    // console.log("Id is", req.params.id)
    const { id } = req.params

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        // console.log(`user deleted with id: ${id}`)
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}