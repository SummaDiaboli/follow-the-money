const pool = require('../../database/queries')

const getNotifications = (req, res) => {
    pool.query('SELECT * FROM notifications', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Current notifications are: ${results.rows}`)
    })
}

const getNotificationById = (req, res) => {
    const { id } = req.params

    pool.query('SELECT * FROM notifications WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createNotification = (req, res) => {
    const { type, notification, url, username } = req.body

    pool.query(
        'INSERT INTO notifications (date, time, type, notification, url, username) \
        VALUES (current_date, current_time, $1, $2, $3, $4)',
        [type, notification, url, username],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Post created: ${result}`)
        })
}

const deleteNotification = (req, res) => {
    const { id } = req.params

    pool.query('DELETE FROM notifications WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }

        res.status(200).send(`Notification deleted with ID: ${id}`)
    })
}

module.exports = {
    getNotifications,
    getNotificationById,
    createNotification,
    deleteNotification
}