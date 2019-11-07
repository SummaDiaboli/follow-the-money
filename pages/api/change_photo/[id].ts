import { Request, Response } from "express"
import fs from "fs"
import formidable from 'formidable'
const pool = require('../../../database/queries')
import { loadFB } from '../../../utils/firebase'

export default (req: Request, res: Response) => {
    const {
        query: { id },
        method
    } = req

    switch (method) {
        case 'GET':
            getImage(req, res, id)
            break

        case 'PUT':
            uploadImage(req, res, id)
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const getImage = (req: Request, res: Response, id: string) => {
    pool.query('SELECT photo FROM users WHERE username = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(result.rows)
    })
}

const uploadImage = (req: Request, res: Response, id: string) => {
    const body = JSON.parse(req.body)
    const url = body.url
    pool.query(
        'UPDATE users \
        SET photo = $1 \
        WHERE username = $2',
        [url, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send('File uploaded')
        }
    )
    // try {
    //     const form = new formidable.IncomingForm()
    //     form.parse(req)
    //     /* form.on('fileBegin', (name, file) => {
    //         if (fs.existsSync(`uploads/${id}`) === false) {
    //             fs.mkdirSync(`uploads/${id}`)
    //             file.path = 'uploads/' + id + '/' + file.name
    //         } else {
    //             file.path = 'uploads/' + id + '/' + file.name
    //         }
    //     }) */
    //     // form.on('file', (name, file: File) => {
    //         // console.log('Uploaded', file.name)

    //         // const fb = loadFB()
    //         // const storageRef = fb.storage().ref()
    //         // // const fileBlob = new Blob([file])
    //         // storageRef.put(file).then(snapshot => {
    //         //     console.log(snapshot)
    //         res.status(200).send('Uploaded')
    //         // })
    //     })
    // } catch (error) {
    //     console.log(error)
    //     res.status(401).send('File could not be uploaded')
    // }
}

/* export const config = {
    api: {
        bodyParser: false,
    },
} */