const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')
const Book = require('../models/book')


beforeAll(async () => {
  await User.deleteMany({})
})

test('creating a new user works', async() => {
  await api
    .post('/api/user')
    .send({newUsername: 'Testaaja', newPassword: 'salasana'})
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('logging in works', async() => {
  await api
    .post('/api/login')
    .send({username: 'Testaaja', password: 'salasana'})
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// test('adding new books works', async() => {
//   await api
//     .post('/api/googlebooks')
//     .send({title: 'The Blade Itself' , author: 'Joe Abercrombie'})
// })

afterAll(() => {
  mongoose.connection.close()
})