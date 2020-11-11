require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
const axios = require('axios')

const KEY = process.env.BOOKS_KEY
const PORT = process.env.PORT

const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

app.get('/:filter', async (request, response) => {
  const searchFilter = request.params.filter
  const url = `${baseUrl}q=${searchFilter}&maxResults=40&key=${KEY}`
  const books = await axios.get(url)
  response.send(books.data.items)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})