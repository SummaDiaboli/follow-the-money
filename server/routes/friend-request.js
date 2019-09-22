const pool = require('../../database/queries.js')

const getFriendRequests = (req, res) => {
    pool.query('SELECT * FROM friend_requests ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Current friend requests are: ${results.rows}`)
    })
}

const getFriendRequestById = (req, res) => {
    const { id } = req.params

    pool.query('SELECT * FROM friend_requests WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createFriendRequest = (req, res) => {
    const { username, fk_username } = req.body

    pool.query(
        'INSERT INTO friend_requests (request_date, request_time, username, fk_username)\
        VALUES (current_date, current_time, $1, $2)',
        [username, fk_username],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Friend Request created: ${result}`)
        })
}

const deleteFriendRequest = (req, res) => { }

module.exports = {
    getFriendRequests,
    getFriendRequestById,
    createFriendRequest,
    deleteFriendRequest
}