require('dotenv').config()
const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const server = http.createServer(app)

const PORT = config.PORT || 3001

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// const app = express()
// const cors = require('cors')

// app.use(cors())
// app.use(express.json())
// const axios = require('axios')

// const KEY = process.env.BOOKS_KEY
// const PORT = process.env.PORT
// const MONGODB_URI = process.env.MONGODB_URI

// const baseUrl = `https://www.googleapis.com/books/v1/volumes?`

// app.get('/:filter', async (request, response) => {
//   const searchFilter = request.params.filter
//   const url = `${baseUrl}q=${searchFilter}&maxResults=40&key=${KEY}`
//   const books = await axios.get(url)
//   response.send(books.data.items)
// })

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })