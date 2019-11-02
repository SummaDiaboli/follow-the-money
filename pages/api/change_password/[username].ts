import { Request, Response } from "express"

const pool = require('../../../database/queries')
const bcrypt = require('bcrypt')
const salt = "$2b$10$km1k7cENiAiicK9Ml9E4wO"

export default (req: Request, res: Response) => {
    const {
        query: { username },
        method
    } = req

    switch (method) {
        case 'GET':
            break

        case 'PUT':
            changePassword(req, res, username)
            break

        case 'DELETE':
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const changePassword = (request: Request, response: Response, username: String) => {
    const password = JSON.parse(request.body)
    const newHash = bcrypt.hashSync(password.newPassword, salt)
    const oldHash = bcrypt.hashSync(password.currentPassword, salt)
    pool.query(
        'UPDATE users \
        SET password=$1 \
        WHERE \
            username = $2 \
        AND \
            password = $3',
        [newHash, username, oldHash],
        (error, result) => {
            if (error) {
                // console.log(error)
                throw error
            }
            console.log(result)
            if (result.rowCount === 1) {
                response.status(200).send(`User modified with username ${username}`)
            } else {
                response.status(404).send(`Could not update user`)
            }
        })
}