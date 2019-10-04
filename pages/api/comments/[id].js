const pool = require('../../../database/queries')

export default (req, res) => {
    const { query: { id }, method } = req

    switch (method) {
        case 'GET':
            getCommentsForPost(req, res, id)
            break

        case 'PUT':
            updateComment(req, res, id)
            break

        case 'DELETE':
            deleteComment(req, res, id)
            break

        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

const getCommentsForPost = (req, res, id) => {
    pool.query('SELECT * FROM posts_comments WHERE post_id=$1',
        [id],
        (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).send(results.rows)
        })
}