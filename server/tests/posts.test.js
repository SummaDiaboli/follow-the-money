const request = require('supertest')
const app = (require('../server.js'))

describe('Get Posts', () => {
    it("Should get all posts", async done => {
        const res = await request(app).get('/api/posts')
        expect(res.status).toBe(200)
        done()
    })
})

describe('Get Post by Id', () => {
    it("Should get a specific post based on id", async done => {
        const res = await request(app).get('/api/posts/1')
        expect(res.status).toBe(200)
        done()
    })
})


describe('Create Post', () => {
    it("Should create a new post", async done => {
        const res = await request(app)
            .post('/api/posts')
            .set('Accept', 'application/json')
            .send({
                "title": "test",
                "has_photo": true,
                "has_audio": false,
                "has_video": false,
                "content": { "text": "test" },
                "has_embedded_usernames": false,
                "username": "Salim"
            })
        expect(res.status).toBe(201)
        done()
    })
})

describe('Update a post', () => {
    it("Should update the data in a post", async done => {
        const res = await request(app)
            .put('/api/posts/16')
            .set('Accept', 'application/json')
            .send({
                "title": "test",
                "has_photo": true,
                "has_audio": true,
                "has_video": false,
                "content": { "text": "test" },
                "has_embedded_usernames": false,
                "username": "Salim"
            })
        expect(res.status).toBe(200)
        done()
    })
})


describe('Delete Post', () => {
    it("Should delete a post with a specific ID", async done => {
        const res = await request(app).delete('/api/posts/1')
        expect(res.status).toBe(200)
        done()
    })
})

