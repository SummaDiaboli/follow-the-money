import { Request, Response } from "express"
import fs from "fs"
import formidable from 'formidable'
const pool = require('../../../database/queries')

export default (req: Request, res: Response) => {
    const {
        query: { id },
        method
    } = req

    switch (method) {
        case 'PUT':
            uploadFileForUser(req, res, id)
            break

        default:
            res.setHeader('Allow', ['PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const uploadFileForUser = (req: Request, res: Response, id: string) => {
    try {
        const form = new formidable.IncomingForm()
        form.parse(req)
        form.on('fileBegin', (name, file) => {
            if (fs.existsSync(`uploads/${id}`) === false) {
                fs.mkdirSync(`uploads/${id}`)
                file.path = 'uploads/' + id + '/' + file.name
            } else {
                file.path = 'uploads/' + id + '/' + file.name
            }
        })
        form.on('file', (name, file) => {
            // console.log('Uploaded', file.name)
            pool.query(
                'UPDATE users \
                SET photo = $1 \
                WHERE username = $2',
                [file.path, id],
                (error, result) => {
                    if (error) {
                        throw error
                    }
                    res.status(200).send('File uploaded')
                }
            )
        })
    } catch (error) {
        res.status(401).send('File could not be uploaded')
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
}