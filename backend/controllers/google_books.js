const axios = require('axios')
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const googleBooksRouter = require('express').Router();
const Book = require('../models/book')
const User = require('../models/user')
const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

const getToken = request => {
  const auth = request.get('authorization')
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
    title: body.title,
    author: body.author,
    publicationYear: body.publicationYear,
    linkToCoverImage: body.coverImage,
    rating: body.rating,
    review: body.review,
    owned: body.owned,
    read: body.read,
    quotes: body.quotes
  })
  
  user.books = user.books.concat(book)
  await user.save()
  console.log(user.books)
  res.json(book.toJSON())
})

module.exports = googleBooksRouter