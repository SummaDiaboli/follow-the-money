const pool = require('../../database/queries')

const getPodcasts = (req, res) => {
    pool.query('SELECT * FROM podcasts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Current podcasts are ${results.rows}`)
    })
}

const getPodcastById = (req, res) => {
    // const {id} = req.query
    const { id } = req.params

    pool.query('SELECT * FROM podcasts WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json(result.rows)
    })

}

const createPodcast = (req, res) => {
    const { name, producer, podcast_url } = req.body

    pool.query(
        'INSERT INTO podcasts (date, time, name, producer, podcast_url) \
        VALUES (current_date, current_time, $1, $2, $3)',
        [name, producer, podcast_url],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Podcast added: ${result}`)
        })
}

const updatePodcast = (req, res) => {
    // const {id} = req.query
    const { id } = req.params

    const { name, producer, podcast_url } = req.body

    pool.query(
        'UPDATE podcasts SET name = $1, producer = $2, podcast_url = $3 WHERE id = $4',
        [name, producer, podcast_url, id],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`Podcast Modified with ID: ${id}`)
        }
    )
}

const deletePodcast = (req, res) => {
    // const {id} = req.query
    const { id } = req.params

    pool.query('DELETE FROM podcasts WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Podcast deleted with ID: ${id}`)
    })

}

module.exports = {
    getPodcasts,
    getPodcastById,
    createPodcast,
    updatePodcast,
    deletePodcast
}