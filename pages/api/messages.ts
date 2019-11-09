import { Request, Response } from "express"

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
    const {
        method
    } = req

    switch (method) {
        case 'POST':
            createMessage(req, res)

        default:
            break;
    }
}

const createMessage = (req: Request, res: Response) => {
    // const body = JSON.parse(req.body)
    const { sender, message, receiver } = req.body
    pool.query("INSERT INTO messages \
    (date, time, receiver, message, read, sender) \
    VALUES (current_date, current_time, $1, $2, 'f', $3)",
        [receiver, message, sender],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send('Created')
        })
}