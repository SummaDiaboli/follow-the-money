const request = require('supertest')
const app = require('../server.js')

describe('Get Podcasts', () => {
    it("Should get all the podcasts in the database", async done => {
        const res = await request(app).get('/api/podcasts')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Get Podcast by Id', () => {
    it("Should get a specific podcast by its id", async done => {
        const res = await request(app).get('/api/podcasts/1')
        expect(res.statusCode).toBe(200)
        done()
    })
})

describe('Post Podcast', () => {
    it("Should create a new podcast", async done => {
        const res = await request(app)
            .post('/api/podcasts')
            .set('Accept', 'application/json')
            .send({
                "name": "test",
                "producer": "test",
                "podcast_url": "testUrl"
            })
        expect(res.statusCode).toBe(201)
        done()
    })
})

describe('Update Podcast at :id', () => {
    it("Should update the podcast's data at specific id", async done => {
        const res = await request(app)
            .put('/api/podcasts/1')
            .set('Accept', 'application/json')
            .send({})
        expect(res.statusCode).toBe(201)
        done()
    })
})

describe('Delete Podcast at :id', () => {
    it("Should delete a specific podcast, depending on id", async done => {
        const res = await request(app)
            .delete('/api/podcasts/1')
        expect(res.statusCode).toBe(200)
        done()
    })
})
