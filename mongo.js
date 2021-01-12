require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const testUserSchema = new mongoose.Schema({
  username: String,
  unsafePassword: String
})

const TestUser = mongoose.model('TestUser', testUserSchema)

const testUser = new TestUser({
  username: 'Admin',
  unsafePassword: 'abcd'
})

testUser.save().then(res => {
  console.log('user saved')
  mongoose.connection.close()
})