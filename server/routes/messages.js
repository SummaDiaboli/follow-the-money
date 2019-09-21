const pool = require('../../database/queries')

const getMessages = (req, res) => {
    pool.query('SELECT * FROM messages ORDER BY id DESC', (error, result) => {
        if (error) {
            throw error
        }

        res.status(200).send(`Messages are: ${result.rows}`)
    })
}

const createMessage = (req, res) => {
    const { receiver, message, read, sender } = req.body

    pool.query(
        'INSERT INTO messages (date, time, receiver, message, read, sender) \
        VALUES (current_date, current_time, $1, $2, $3, $4)',
        [receiver, message, read, sender],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Message created to user: ${receiver}`)
        }
    )
}

const deleteMessage = (req, res) => {
    // const { id } = req.query
    const { id } = req.params

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Message deleted with ID: ${id}`)
    })
}

module.exports = {
    getMessages,
    createMessage,
    deleteMessage
}