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
            createCommunity(req, res)
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

const createCommunity = (req: Request, res: Response) => {
    const { name, description, username } = req.body
    pool.query(
        'INSERT INTO communities (name, description, username) \
        VALUES ($1, $2, $3)', [name, description, username], (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).send(`Cannot create community`)
        }
        res.status(201).send(`Community created: ${result}`)
    })
}