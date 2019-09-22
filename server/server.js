const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

const user = require('./routes/users')
const post = require('./routes/posts')
const message = require('./routes/messages')
const podcast = require('./routes/podcasts')
const notification = require('./routes/notifications')
const friendRequest = require('./routes/friend-request')

app.get('/', (req, res) => console.log("Hello world"))


/**
 * API for creating, updating, deleting and getting
 * users from the database
 */
app.get('/api/users', user.getUsers)
app.get('/api/users/:id', user.getUserById)
app.post('/api/users', user.createUser)
app.put('/api/users/:id', user.updateUser)
app.delete('/api/users/:id', user.deleteUser)


/**
 * API for getting, creating and deleting posts
 * from the database
 */
app.get('/api/posts', post.getPosts)
app.get('/api/posts/:id', post.getPostById)
app.post('/api/posts', post.createPost)
app.put('/api/posts/:id', post.updatePost)
app.delete('/api/posts/:id', post.deletePosts)


/**
 * API for getting, deleting and creating messages
 */
app.get('/api/messages', message.getMessages)
app.get('/api/messages/:id', message.getMessageById)
app.post('/api/messages', message.createMessage)
app.delete('/api/messages/:id', message.deleteMessage)


/**
 * API for getting, creating, editing and deleting podcasts
 */
app.get('/api/podcasts', podcast.getPodcasts)
app.get('/api/podcasts/:id', podcast.getPodcastById)
app.post('/api/podcasts', podcast.createPodcast)
app.put('/api/podcasts/:id', podcast.updatePodcast)
app.delete('/api/podcasts/:id', podcast.deletePodcast)


/**
 * API for getting, creating and deleting notifications
 */
app.get('/api/notifications', notification.getNotifications)
app.get('/api/notifications/:id', notification.getNotificationById)
app.post('/api/notifications', notification.createNotification)
app.delete('/api/notifications/:id', notification.deleteNotification)


/**
 * API for getting, creating and deleting friend requests
 */
app.get('/api/friend-requests', friendRequest.getFriendRequests)
app.get('/api/friend-requests/:id', friendRequest.getFriendRequestById)
app.post('/api/friend-requests', friendRequest.createFriendRequest)
app.delete('/api/friend-requests/:id', friendRequest.deleteFriendRequest)

// app.listen(3001, () => console.log("Listening on port 3001"))
module.exports = app