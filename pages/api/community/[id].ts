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

interface Post {
    community_id: number,
    post_id: number
}

const createCommunityPost = (req: Request, res: Response) => {
    const {
        community_id,
        post_id
    }: Post = req.body

    pool.query(
        'INSERT INTO posts \
        (community_id, post_id) \
        VALUES ($1, $2)',
        [community_id, post_id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Post created`)
        }
    )


}