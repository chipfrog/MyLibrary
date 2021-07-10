const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')
const Book = require('../models/book')

let token = null

const initialBooks = [
  {
    title: 'Prince of Thorns',
    author: 'Mark Lawrence',
    grade: 4
  },
  {
    title: 'Muumipeikko ja pyrstötähti',
    author: 'Tove Jansson',
    grade: 5
  },
  {
    title: 'Sinuhe egyptiläinen',
    author: 'Mika Waltari'
  }
]

beforeAll(async () => {
  await User.deleteMany({})
  await api
    .post('/api/user')
    .send({newUsername: 'stock_user', newPassword: 'password'})
  await api  
    .post('/api/login')
    .send({username: 'stock_user', password: 'password'})
    .then((res) => {
      token = res.body.token
    })
  for (book in initialBooks) {
    await api
      .post('/api/googlebooks')
      .send(book)
  }
})

describe('login', () => {
  test('login fails with wrong password', async() => {
    await api
    .post('/api/login')
    .send({username: 'stock_user', password: 'wrong password'})
    .expect(401)
  })

  test('login succeeds with correct credentials', async() => {
    const resultUser = await api
      .post('/api/login')
      .send({username: 'stock_user', password: 'password'})
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    expect(resultUser.body.username).toEqual('stock_user')
  })  
})

describe('user creation', () => {
  test('new user cannot be created if username already exists', async() => {
    await api
      .post('/api/user')
      .send({newUsername: 'stock_user', newPassword: 'abcdefg'})
      .expect(409)
  })

  test('username must be at least 5 characters long', async() => {
    await api
      .post('/api/user')
      .send({newUsername: 'abcd', newPassword: 'abcdefg'})
      .expect(500)

    await api
      .post('/api/user')
      .send({newUsername: 'abcde', newPassword: 'abcdefg'})
      .expect(200)
  })

  test('new user can be created', async() => {
    await api
      .post('/api/user')
      .send({newUsername: 'Testaaja', newPassword: 'salasana'})
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
})

describe('user`s books', () => {
  test('new book can be added', async() => {
    await api
      .post('/api/googlebooks')
      .auth(token, { type: 'bearer' })
      .send({title: 'The Blade Itself', author: 'Joe Abercrombie', rating: 4, rewiew: 'Great book!'})
      .expect(200)
  })

  test('book cannot be added without title or author', async() => {
    await api
      .post('/api/googlebooks')
      .auth(token, { type: 'bearer' })
      .send({title: 'Muumilaakson marraskuu'})
      .expect(500)

    await api
      .post('/api/googlebooks')
      .auth(token, { type: 'bearer' })
      .send({author: 'J.R.R Tolkien'})
      .expect(500)
  })
})

afterAll(() => {
  mongoose.connection.close()
})