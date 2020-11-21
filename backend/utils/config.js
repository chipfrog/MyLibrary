require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI
const GOOGLE_BOOKS_KEY = process.env.BOOKS_KEY

module.exports = {
  PORT,
  MONGODB_URI,
  GOOGLE_BOOKS_KEY
}

