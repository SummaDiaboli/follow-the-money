import { Request, Response } from "express"

const pool = require('../../../../database/queries')

export default (req: Request, res: Response) => {
    const {
        query: { receiver, sender },
        method
    } = req

    switch (method) {
        case 'GET':
            getMessages(req, res, sender, receiver)

        default:
            break;
    }
}

const getMessages = (req: Request, res: Response, sender: string, receiver: string) => {
    pool.query('SELECT * FROM messages WHERE (sender = $1 AND receiver = $2) OR (sender = $2 AND receiver = $1)',
        [sender, receiver], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(results.rows)
        })
}