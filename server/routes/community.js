const pool = require("../../database/queries")

const getCommunities = (req, res) => {
    pool.query('SELECT * FROM communities ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }

        res.status(200).send(`Messages are: ${results.rows}`)
    })
}

const getCommunityById = (req, res) => {
    // const {id} = res.query
    const { id } = req.params

    pool.query('SELECT * FROM communities WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Community with id ${id}`)
    })
}
