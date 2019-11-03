import { Request, Response } from "express"

const pool = require('../../../database/queries')

export default (req: Request, res: Response) => {
    const {
        query: { username },
        method
    } = req

    switch (method) {
        case 'GET':
            break

        case 'PUT':
            changeBio(req, res, username)
            break

        case 'DELETE':
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const changeBio = (request: Request, response: Response, username: String) => {
    const bio = request.body
    pool.query(
        'UPDATE users \
        SET about=$1 \
        WHERE username = $2',
        [bio, username],
        (error, result) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with username ${username}`)
        })
}

export const config = {
    api: {
        bodyParser: true,
    },
}