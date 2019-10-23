import { Request, Response } from 'express'

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
    const {
        method
    } = req

    switch (method) {
        case 'GET':
            getCommunities(req, res)
            break

        case 'POST':

            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
    }
}

const getCommunities = (req: Request, res: Response) => {
    pool.query('SELECT * FROM communities', (error, results) => {
        if (error) {
            res.status(500)
        }
        else {
            res.status(200).json(results.rows)
        }
    })
}