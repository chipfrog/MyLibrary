const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const usersRouter = require('express').Router()
const User = require('../models/user')

const getToken = request => {
  let auth = request.get('authorization')
  
  if (auth === undefined) {
    auth = request.body.config.headers.Authorization
  }

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

  res.send(user.toJSON())
})

usersRouter.post('/', async (req, res) => {
  const body = req.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.newPassword, saltRounds)
  const userExists = await User.findOne({ username: body.newUsername })

  if (userExists) {
    return res.status(409).json({ error: 'Username already exists!' })
  }
  const user = new User({
    username: body.newUsername,
    passwordHash
  })
  if (!user) {
    return res.status(400).json({ error: 'Malformed values!' })
  }
  const savedUser = await user.save()
  res.json(savedUser)
})

usersRouter.delete('/delete', async (req, res) => {
  const token = getToken(req)

  const decodedToken = jwt.verify(token, config.SECRET)
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const result = await User.findByIdAndDelete(decodedToken.id)

  res.json(result.data)
})



module.exports = usersRouter