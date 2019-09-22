const pool = require('../../database/queries')

const getPosts = (req, res) => {
    pool.query('SELECT * FROM posts ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Posts are: ${results.rows}`)
    })
}

const getPostById = (req, res) => {
    // const id = req.query.id
    const { id } = req.params

    pool.query('SELECT * FROM posts WHERE id=$1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

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

const updatePost = (req, res) => {
    const { title, has_photo, has_audio, has_video, content, has_embedded_usernames, username } = req.body
    // const { id } = req.query
    const { id } = req.params

    pool.query('UPDATE posts SET title = $1, has_photo = $2, has_audio = $3, has_video = $4, content = $5, \
        has_embedded_usernames = $6, username = $7 WHERE id = $8',
        [title, has_photo, has_audio, has_video, content, has_embedded_usernames, username, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Post modified with ID: ${id}`)
        })
}

const deletePosts = (req, res) => {
    // const { id } = req.query
    const { id } = req.params

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Post deleted with ID: ${id}`)
    })
}

module.exports = {
    getPosts,
    getPostById,
    createPost,
    updatePost,
    deletePosts,
}