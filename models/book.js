const mongoose = require('mongoose')
const Quote = require('../models/quote').schema

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationYear: Number,
  linkToCoverImage: String,
  rating: { type: Number, min: 1, max: 5, default: 1 },
  review: { type: String },
  owned: { type: Boolean, default: false },
  read: { type: Boolean, default: false },
  quotes: [Quote],
  categories: [{type: String}],
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