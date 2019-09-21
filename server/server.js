const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

const user = require('./routes/users')
const post = require('./routes/posts')
const message = require('./routes/messages')

app.get('/', (req, res) => console.log("Hello world"))

/**
 * Api for creating, updating, deleting
 * and getting users from the database
 */
app.get('/api/users', user.getUsers)
app.get('/api/users/:id', user.getUserById)
app.post('/api/users', user.createUser)
app.put('/api/users/:id', user.updateUser)
app.delete('/api/users/:id', user.deleteUser)


/**
 * Api for getting, creating and deleting posts
 * from the database
 */
app.get('/api/posts', post.getPosts)
app.get('/api/posts/:id', post.getPostById)
app.post('/api/posts', post.createPost)
app.put('/api/posts/:id', post.updatePost)
app.delete('/api/posts/:id', post.deletePosts)


/**
 * Api for getting, deleting and creating messages
 */
app.get('/api/messages', message.getMessages)
app.post('/api/messages', message.createMessage)
app.delete('/api/messages/:id', message.deleteMessage)

// app.listen(3001, () => console.log("Listening on port 3001"))
module.exports = app