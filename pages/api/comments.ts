import { Request, Response } from "express"

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
    const {
        method
    } = req

    switch (method) {
        case 'POST':
            createComment(req, res)
            break

        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
    }
}

interface Comment {
    post_id: number,
    comment: string,
    username: string,
    commentPhoto?: string,
    commentVideo?: string
}

const createComment = (req: Request, res: Response) => {
    const { post_id, comment, username, commentPhoto, commentVideo }: Comment = req.body

    pool.query(
        'INSERT INTO posts_comments (comment_date, comment_time, comment, post_id, username, comment_photo, comment_video) \
        VALUES (current_date, current_time, $1, $2, $3, $4, $5)',
        [comment, post_id, username, commentPhoto, commentVideo],
        (error, result) => {
            if (error) {
                return res.status(500).send('Comment could not be created')
                // throw error
            }
            res.status(201).send(result)
        }
    )
}