const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')
const Book = require('../models/book')

const initialBooks = [
  {
    
  }
]

test('creating a new user works', async() => {
  await api
    .post('/api/user')
    .send(initialUser)
    .expect(200)
})

test('logging in works', async() => {
  await api
    .post('/api/login')
    .send({username: 'Testaaja', password: 'salasana'})
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})