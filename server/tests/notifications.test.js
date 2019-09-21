const request = require('supertest')
const app = require('../server.js')

describe('Get Notifications', () => {
    it("Should get all notifications", async done => {
        const res = await request(app).get('/api/notifications')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Get Notification by Id', () => {
    it("Should get a specific notification based on id", async done => {
        const res = await request(app).get('/api/notifications/1')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Create Notification', () => {
    it("Should create a new notification", async done => {
        const res = await request(app)
            .post('/api/notifications')
            .set('Accept', 'application/json')
            .send({
                "type": { "test": "test" },
                "notification": "test",
                "username": "test",
            })
        expect(res.statusCode).toBe(201)
        done()
    })
})

