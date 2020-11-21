const axios = require('axios')
const config = require('../utils/config')
const googleBooksRouter = require('express').Router();

const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

googleBooksRouter.get('/:filter', async (request, response) => {
  const searchFilter = request.params.filter
  const url = `${baseUrl}q=${searchFilter}&maxResults=40&key=${config.GOOGLE_BOOKS_KEY}`
  const books = await axios.get(url)
  response.send(books.data.items)
})

module.exports = googleBooksRouter