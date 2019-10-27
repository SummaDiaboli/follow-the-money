import { Request, Response } from "express"

const pool = require('../../database/queries')

export default (req: Request, res: Response) => {
    const { method } = req

    switch (method) {
        case 'GET':
            getPosts(req, res)
            break

        case 'POST':
            createPost(req, res)
            break

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).send(`Method ${method} Not Allowed`)
    }
}

const getPosts = (req: Request, res: Response) => {
    const {
        community_id
    } = req.query

    pool.query(
        'SELECT * FROM communities_posts WHERE community_id=$1',
        [community_id],
        (error, result) => {
            if (error) {
                console.log(error)
            } else {
                // console.log(result.rows)
                let ids = []
                result.rows.map((row) => {
                    // console.log(row.post_id)
                    ids.push(row.post_id)
                })
                if (ids.length > 0) {
                    // console.log(`SELECT * FROM posts WHERE id=ANY(Array[${ids}])`)
                    pool.query(`SELECT * FROM posts WHERE id=ANY(Array[${ids}]) ORDER BY id DESC`, (error, result) => {
                        if (error) {
                            console.log(error)
                        } else {
                            // console.log(result.rows)
                            // res.status(200).send("Working")
                            res.status(200).json(result.rows)
                        }
                    })
                } else {
                    res.status(400).send('Could not get it')
                }
            }
        }
    )

    // pool.query(
    //     'SELECT * FROM posts WHERE id=ANY(Array[$1])',
    //     [community_id],
    //     (error, result) => {
    //         if (error) {
    //             console.log(error)
    //         } else {
    //             res.status(200).send('Gotten posts')
    //         }
    //     }
    // )
}

interface Post {
    post_id: number,
    community_id: number
}

const createPost = (req: Request, res: Response) => {
    const {
        post_id,
        community_id
    }: Post = req.body

    pool.query(
        'INSERT INTO communities_posts \
        (post_id, community_id) \
        VALUES ($1, $2)\
        RETURNING id',
        [post_id, community_id],
        (error, result) => {
            if (error) {
                throw error
            } else {
                res.status(201).send(`Created`)
            }
        }
    )
}