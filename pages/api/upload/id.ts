import { Request, Response } from "express"
import formidable from 'formidable'

export default (req: Request, res: Response) => {
    const {
        query: { id },
        method
    } = req

    switch (method) {
        case 'POST':
            uploadFileForUser(req, res, id)
            break

        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const uploadFileForUser = (req: Request, res: Response, id: string) => {
    try {
        const form = new formidable.IncomingForm()
        form.parse(req)
        form.on('fileBegin', (name, file) => {
            file.path = 'uploads/' + id + '/' + file.name
        })
        form.on('file', (name, file) => {
            console.log('Uploaded', file.name)
        })
        res.status(200).send('File uploaded')
    } catch (error) {
        console.log(error)
        res.status(401).send('File could not be uploaded')
    }
}