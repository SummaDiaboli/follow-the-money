var supertest = require("supertest")

var server = supertest.agent('https://localhost:3000')

describe('SAMEPLE UNIT Test', () => {
    it("Should return home page", () => {
        server.get('api/users').then((users) => {
            console.log(users)
        })
    })
})
