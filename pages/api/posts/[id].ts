import { Request, Response } from "express"

const pool = require('../../../database/queries')

export default (req: Request, res: Response) => {
    const { query: { id }, method } = req

    switch (method) {
        case 'GET':
            getPostById(req, res, id)
            break

        case 'PUT':
            updatePost(req, res, id)
            break

        case 'DELETE':
            deletePost(req, res, id)
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const getPostById = (req: Request, res: Response, id: string) => {
    pool.query('SELECT * FROM posts WHERE id=$1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(result.rows)
    })
}

interface Post {
    title: string,
    has_photo: boolean,
    has_audio: boolean,
    has_video: boolean,
    content: JSON,
    has_embedded_usernames: boolean,
    username: string
}

const updatePost = (req: Request, res: Response, id: string) => {
    const { title, has_photo, has_audio, has_video, content, has_embedded_usernames, username }: Post = req.body
    // const { id } = req.query
    // const { id } = req.params

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

const deletePost = (req: Request, res: Response, id: string) => {
    // const { id } = req.query
    // const { id } = req.params

    pool.query('DELETE FROM posts WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Post deleted with ID: ${id}`)
    })
}