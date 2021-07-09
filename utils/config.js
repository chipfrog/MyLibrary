require('dotenv').config()

let PORT = process.env.PORT
const GOOGLE_BOOKS_KEY = process.env.BOOKS_KEY
const SECRET = process.env.SECRET

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  PORT,
  MONGODB_URI,
  GOOGLE_BOOKS_KEY,
  SECRET
}

