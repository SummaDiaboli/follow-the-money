const request = require('supertest')
const app = require('../server.js')

describe('Get Users', () => {
    it("Should get users", async done => {
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Add Users', () => {
    it("Should add a user to the database", async done => {
        const res = await request(app)
            .post('/api/users')
            .set('Accept', 'application/json')
            .send({
                "role": "user",
                "username": "test",
                "password": "test",
                "name": { "fName": "test" },
                "address": { "street": "test" },
                "email": { "gmail": "test@test.com" },
            })
        expect(res.statusCode).toBe(201)
        done()
    })
})

describe('Get User from Id', () => {
    it("Should fetch user data from database", async done => {
        const res = await request(app)
            .get('/api/users/18')

        expect(res.status).toBe(200)
        done()
    })
})

describe('Update User at :id', () => {
    it("Should update the user's data in the database", async done => {
        const res = await request(app)
            .put('/api/users/18')
            .set('Accept', 'application/json')
            .send({
                "role": "user",
                "username": "salim",
                "password": "salim",
                "name": { "fName": "Salim", "lName": "Hussaini" },
                "email": { "gmail": "salim@hussaini.com" },
                // "address": { "street": "Abuja", "road": "test" },
            })
        expect(res.status).toBe(201)
        done()
    })
})

describe('Delete User at :id', () => {
    it("Should delete a specific user", async done => {
        const res = await request(app)
            .delete('/api/users/18')
        expect(res.status).toBe(200)
        done()
    })
})
