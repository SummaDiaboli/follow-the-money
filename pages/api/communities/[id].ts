import { Request, Response } from "express"

const pool = require('../../../database/queries')

export default (req: Request, res: Response) => {
    const {
        query: { id },
        method,
    } = req

    switch (method) {
        case 'GET':
            getCommunityPosts(req, res, id)
            break

        case 'PUT':
            break

        case 'DELETE':
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const getCommunityPosts = (req: Request, res: Response, id: String) => {
    pool.query('SELECT * FROM communities_view WHERE id = $1',
        [id],
        (error, results) => {
            error
                ? res.status(500).send(`Could not find ${id}`)
                : res.status(200).json(results.rows)
        })
}

const createCommunityPost = (req: Request, res: Response) => {
    const {
        title,
        has_photo,
        has_audio,
        has_video,
        content,
        has_embedded_usernames,
        username
    } = req.body

    pool.query()
}