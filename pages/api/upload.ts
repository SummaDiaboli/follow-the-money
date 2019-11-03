import { Request, Response } from 'express'
import fs from "fs"
import formidable from 'formidable'

export default (req: Request, res: Response) => {
    const {
        method
    } = req

    switch (method) {
        case 'POST':
            uploadFile(req, res)
            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
            break
    }
}

const uploadFile = (req: Request, res: Response) => {
    try {
        const form = new formidable.IncomingForm()
        form.parse(req)
        form.on('fileBegin', (name, file) => {
            file.path = 'uploads/' + file.name
        })
        form.on('file', (name, file) => {
            // console.log('Uploaded', file.name)
        })
        res.status(200).send('File uploaded')
    } catch (error) {
        console.log(error)
        res.status(401).send('File could not be uploaded')
    }
    /* return form.parse(req, (err, fields, files) => {
        // fs.writeFileSync(`${fields.fileName}`, files.file)
        fs.createWriteStream(`uploads/${fields.fileName}`).write(files.file)
        // console.log(files.file)
        // console.log(files)
        // console.log(fields)
    }) */
    // const file = req.body
    // console.log(file)
    // req.pipe(createWriteStream(`uploads/foo.jpg`))
    /* res.statusCode = 200
    console.log(res.statusCode)
    res.end() */
}

export const config = {
    api: {
        bodyParser: false,
    },
}