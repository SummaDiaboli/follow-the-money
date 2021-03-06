import { Request, Response, response } from "express"

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
    const {
        method
    } = req

    switch (method) {
        case 'GET':
            getAllUsers(req, res)
            break;

        default:
            break;
    }
}

const getAllUsers = (req: Request, res: Response) => {
    pool.query('SELECT id, username, name, email, about, photo FROM users ORDER BY username ASC',
        (error, results) => {
            if (error) {
                res.status(500)
            }
            res.status(201).send(results.rows)
        })
}