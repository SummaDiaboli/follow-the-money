import { Response, Request } from "express"

const pool = require('../../../database/queries')

export default (req: Request, res: Response) => {
    const { query: { id }, method } = req

    switch (method) {
        case 'GET':
            getCommentsForPost(req, res, id)
            break

        case 'PUT':
            updateComment(req, res, id)
            break

        case 'DELETE':
            deleteComment(req, res, id)
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const getCommentsForPost = (req: Request, res: Response, id: string) => {
    pool.query('SELECT * FROM posts_comments WHERE post_id=$1',
        [id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(results.rows)
        })
}

const updateComment = (req: Request, res: Response, id: string) => {
    const { comment } = req.body
    pool.query('UPDATE post_comments SET comment = $1 WHERE id = $2',
        [comment, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`Comment modified with id ${id}`)
        })
}

const deleteComment = (req: Request, res: Response, id: string) => {
    pool.query('DELETE FROM post_comments WHERE id=$1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Comment deleted with the id: ${id}`)
    })
}