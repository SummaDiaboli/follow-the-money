const pool = require('../../database/queries')

export default (req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            getPosts(req, res)
            break

        case 'POST':
            createPost(req, res)
            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
    }
}

/**
 * Get all posts from the database
 */
const getPosts = (req, res) => {
    pool.query('SELECT * FROM posts ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Posts are: ${results.rows}`)
    })
}

/**
 * Create a new position
 */
const createPost = (req, res) => {
    const { title, has_photo, has_audio, has_video, content, has_embedded_usernames, username } = req.body

    pool.query(
        'INSERT INTO posts \
        (title, has_photo, has_audio, has_video, content, has_embedded_usernames, username, post_date, post_time) \
        VALUES ($1, $2, $3, $4, $5, $6, $7, current_date, current_time)',
        [title, has_photo, has_audio, has_video, content, has_embedded_usernames, username],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Post created with Id: ${result}`)
        }
    )
}