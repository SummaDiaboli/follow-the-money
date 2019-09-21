const request = require('supertest')
const app = require('../server.js')

describe('Get Messages', () => {
    it("Should get all messages", async done => {
        const res = await request(app).get('/api/messages')
        expect(res.status).toBe(200)
        done()
    })
})

describe('Post Message', () => {
    it("Should create a new message", async done => {
        const res = await request(app)
            .post('/api/messages')
            .set('Accept', 'application/json')
            .send({
                "receiver": "admin",
                "message": "test",
                "read": false,
                "sender": "test"
            })
        expect(res.status).toBe(201)
        done()
    })
})

describe('Delete Message', () => {
    it("Should delete message with specific id", async done => {
        const res = await request(app)
            .delete('/api/messages/1')
        expect(res.status).toBe(200)
        done()
    })
})

