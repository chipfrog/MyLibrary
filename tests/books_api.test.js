const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')

let token = null

const initialBooks = [
  {
    title: 'Prince of Thorns',
    author: 'Mark Lawrence',
    date: new Date(),
    rating: 4
  },
  {
    title: 'Muumipeikko ja pyrstötähti',
    author: 'Tove Jansson',
    date: new Date(),
    rating: 5
  },
  {
    title: 'Sinuhe egyptiläinen',
    author: 'Mika Waltari',
    date: new Date(),
  }
]
jest.setTimeout(20000)

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
  
  for (i = 0; i < initialBooks.length; i ++) {
    await api
      .post('/api/googlebooks')
      .auth(token, { type: 'bearer' })
      .send(initialBooks[i])
  }
  const user = await api
    .get('/api/user')
    .auth(token, { type: 'bearer' })
    
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
  let book_id = null
  let addedBook = null
  let updatedUser = null

  test('new book can be created and is added to the user`s library', async() => {
    const user = await api
      .get('/api/user')
      .auth(token, { type: 'bearer' })
      .expect(200)
    
    expect(user.body.books).toHaveLength(initialBooks.length)  

    addedBook = await api
      .post('/api/googlebooks')
      .auth(token, { type: 'bearer' })
      .send({title: 'The Blade Itself', author: 'Joe Abercrombie', rating: 4, date: new Date(), rewiew: 'Great book!'})
      .expect(200)

    book_id = addedBook.body.id
    expect(addedBook.body.title).toEqual('The Blade Itself')

    updatedUser = await api
      .get('/api/user')
      .auth(token, { type: 'bearer' })
      .expect(200)

    console.log(updatedUser.body.books)
    expect(updatedUser.body.books).toHaveLength(initialBooks.length + 1)    
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

  test('book cannot be added without valid token', async() => {
    await api
      .post('/api/googlebooks')
      .send({title: 'Muumipappa ja meri', author: 'Tove Jansson'})
      .expect(500)
  })

  test('quotes can be added to a book', async() => {
    await api
      .post('/api/googlebooks/addquote')
      .auth(token, { type: 'bearer' })
      .send({quote: 'Live, Love, Laugh', book_id: updatedUser.body.books[0].id})
      .expect(200)
  })

  test('quotes can`t be added without correct book_id', async() => {
    await api
      .post('/api/googlebooks/addquote')
      .auth(token, { type: 'bearer' })
      .send({quote: 'Memento Mori', book_id: 'aBcD1234'})
      .expect(404)
  })

  test('quotes can`t be added without valid token', async() => {
    await api
      .post('/api/googlebooks/addquote')
      .send({quote: 'Live, Love, Laugh', book_id: updatedUser.body.books[0].id})
      .expect(500)
  })

  test('book information can be edited', async() => {
    updatedBook = await api
      .put('/api/googlebooks/edit')
      .auth(token, { type: 'bearer' })
      .send({ review: 'abcd', read: true, rating: 2, owned: true, id: book_id})
      .expect(200)

    expect(updatedBook.body.review).toBe('abcd')
    expect(updatedBook.body.read).toBe(true)
    expect(updatedBook.body.rating).toBe(2)
    expect(updatedBook.body.owned).toBe(true)    
  })

  test('books can be deleted', async() => {
    const user = await api
      .delete('/api/googlebooks/delete')
      .auth(token, { type: 'bearer' })
      .send({ id: book_id })
    console.log(user.body)

    expect(user.body.books.length).toBe(3)
  })
})

describe('book search', () => {
  test('books can be searched via Google Books API', async() => {
    const searchResults = await api
      .get('/api/googlebooks/javascript')
      .expect(200)
    expect(searchResults.body[0].volumeInfo.title.toLowerCase() || searchResults.body[0].volumeInfo.description.toLowerCase()).toMatch('javascript') 
  })
})

afterAll(() => {
  mongoose.connection.close()
})