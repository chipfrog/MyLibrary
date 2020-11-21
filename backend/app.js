const express = require('express')
const config = require('./utils/config')
const googleBooksRouter = require('./controllers/google_books')
const app = express()
const cors = require('cors')
//const usersRouter = require('./controllers/users')


const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/api/googlebooks', googleBooksRouter)

//app.use('/api/users', usersRouter)

module.exports = app