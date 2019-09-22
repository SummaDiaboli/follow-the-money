const request = require('supertest')
const app = require('../server.js')

describe('Get Friend Requests', () => {
    it("Should get all friend requests", async done => {
        const res = await request(app).get('/api/friend-requests')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Get Friend Request by :id', () => {
    it("Should specific get friend request by id", async done => {
        const res = await request(app).get('/api/friend-requests/1')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Create a friend request', () => {
    it("Should create a new friend request", async done => {
        const res = await request(app)
            .post('/api/friend-requests')
            .set('Accept', 'application/json')
            .send({
                "username": "test",
                "fk_username": "salim"
            })
        expect(res.statusCode).toBe(201)
        done()
    })
})


