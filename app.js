const express = require('express')
const config = require('./utils/config')
require('express-async-errors')
const googleBooksRouter = require('./controllers/google_books')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const app = express()
const cors = require('cors')
const path = require('path')

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
app.use('/api/login', loginRouter)
app.use('/api/user', userRouter)
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
    if (err) {
      res.sendStatus(500).send(err)
    }
  })
})

module.exports = app