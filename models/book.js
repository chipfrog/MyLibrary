const mongoose = require('mongoose')
const Quote = require('../models/quote').schema

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: Number,
  linkToCoverImage: String,
  rating: { type: Number, min: 1, max: 10, default: 0 },
  review: { type: String },
  owned: Boolean,
  read: Boolean,
  quotes: [Quote],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Book', bookSchema)