const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Book = require('../models/book').schema

const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  passwordHash: String,
  books: [Book]
  // books: [
  //   { type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Book'
  //   }
  // ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)