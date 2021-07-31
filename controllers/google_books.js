const axios = require('axios')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const googleBooksRouter = require('express').Router();
const Book = require('../models/book')
const User = require('../models/user')
const Quote = require('../models/quote')
const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

const getToken = request => {
  let auth = request.get('authorization')

  // for deleting books
  if (auth === undefined) {
    auth = request.body.config.headers.Authorization
  }
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }
}

googleBooksRouter.get('/:filter', async (request, response) => {
  const searchFilter = request.params.filter
  const url = `${baseUrl}q=${searchFilter}&maxResults=40&key=${config.GOOGLE_BOOKS_KEY}`
  const books = await axios.get(url)
  response.send(books.data.items)
})

googleBooksRouter.post('/', async (req, res) => {
  const body = req.body
  const token = getToken(req)

  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  
  const book = new Book({
    date: body.date,
    title: body.title,
    author: body.author,
    publicationYear: body.publicationYear,
    linkToCoverImage: body.linkToCoverImage,
    rating: body.rating,
    review: body.review,
    owned: body.owned,
    read: body.read,
    quotes: body.quotes,
    categories: body.categories
  })
  user.books = user.books.concat(book)
  await user.save()
  
  res.json(book.toJSON())
})

googleBooksRouter.post('/addquote', async (req, res) => {
  const body = req.body
  const token = getToken(req)
  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  const book = user.books.id(body.book_id)

  if (!book) {
    return res.status(404).json({ error: 'book not found' })
  }
  const quote = new Quote({
    quote: body.quote
  })

  book.quotes = book.quotes.concat(quote)
  await user.save()

  res.json(book.toJSON())
})

googleBooksRouter.put('/edit', async (req, res) => {
  const body = req.body
  const token = getToken(req)

  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const book = user.books.id(body.id)

  if (!book) {
    return res.status(404).json({ error: 'book not found' })
  }
  
  book.review = body.review
  book.quotes = body.quotes
  book.categories = body.categories
  book.read = body.read,
  book.color = body.color,
  book.rating = body.rating
  book.owned = body.owned

  await user.save()
  
  res.json(book.toJSON())
})

googleBooksRouter.delete('/delete', async (req, res) => {
  const id = req.body.id
  const token = getToken(req)

  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  user.books.id(id).remove()
  await user.save()
  
  res.json(user.toJSON())
})

module.exports = googleBooksRouter