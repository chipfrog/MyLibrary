const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const usersRouter = require('express').Router()
const User = require('../models/user')

// usersRouter.get('/', async (req, res) => {
//   const users = await User.find({})
//   response.json(users.map(user => user.toJSON()))
// })

const getToken = request => {
  const auth = request.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')) {
    return auth.substring(7)
  }
}

usersRouter.get('/', async (req, res) => {
  const token = getToken(req)
  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  res.json(user.toJSON())
})

usersRouter.post('/', async (req, res) => {
  const body = req.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    passwordHash
  })

  const savedUser = await user.save()
  res.json(savedUser)
})

module.exports = usersRouter