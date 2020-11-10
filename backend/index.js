require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
const axios = require('axios')

const KEY = process.env.BOOKS_KEY
const PORT = process.env.PORT

const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

console.log(baseUrl)

app.get('/', async (request, response) => {
  const searchFilter = request.body.filter
  console.log(searchFilter)
  const url = `${baseUrl}q=${searchFilter}&key=${KEY}`
  const result = await axios.get(url)
  
  response.send(result.data.items)

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})