const express = require('express')
const app = express()
const pool = require('../database/queries')

app.get('/', (req, res) => console.log("Hello world"))

app.get('/api/users', (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        console.log("Current users are:", results.rows)
        res.status(201).send(`Current users are: ${results.rows}`)
    })
})

app.post('/api/users', (req, res) => {
    const { username, email, name, password, role } = req.body

    pool.query(
        'INSERT INTO users (username, email, name, password, role) VALUES ($1, $2, $3, $4, $5)',
        [username, email, name, password, role],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(201).send(`User added with ID: ${result.insertId}`)
        })
})

app.get('/api/users/:id', (req, res) => {
    const id = req.query.id

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        console.log("The user is:", results.rows)
        res.status(200).json(results.rows)
    })
})

app.put('/api/users/:id', (req, res) => {
    const { username, email, name, password, role } = req.body

    pool.query(
        'UPDATE users SET username = $1, email = $2, name = $3, password = $4, role = $5',
        [username, email, name, password, role],
        (error, result) => {
            if (error) {
                throw error
            }
            res.status(200).send(`User modified with ID: ${id}`)
        })
})

app.delete('/api/users/:id', (req, res) => {
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        console.log(`user deleted with id: ${id}`)
        res.status(200).send(`User deleted with ID: ${id}`)
    })
})

// app.listen(3001, () => console.log("Listening on port 3001"))

module.exports = app