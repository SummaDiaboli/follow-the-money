const request = require('supertest')
const app = (require('../server.js'))

describe('Get Endpoint', () => {
    it("Should get users", async done =>{
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(201)
        expect(res.statusCode).toBe(201)
        done()
    })
})
