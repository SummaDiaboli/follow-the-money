import { Request, Response } from "express"

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
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
const getPosts = (req: Request, res: Response) => {
    pool.query('SELECT * FROM posts ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(results.rows)

    })
}

/**
 * Create a new position
 */
type Post = {
    title: string,
    has_photo: boolean,
    has_audio: boolean,
    has_video: boolean,
    content: JSON,
    has_embedded_usernames: boolean,
    username: string,
    type: string
}
const createPost = (req: Request, res: Response) => {
    const { title, has_photo, has_audio, has_video, content, has_embedded_usernames, username, type }: Post = req.body

    pool.query(
        'INSERT INTO posts \
        (title, has_photo, has_audio, has_video, content, has_embedded_usernames, username, post_date, post_time, type) \
        VALUES ($1, $2, $3, $4, $5, $6, $7, current_date, current_time, $8)',
        [title, has_photo, has_audio, has_video, content, has_embedded_usernames, username, type],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Post created with Id: ${result}`)
        }
    )
}