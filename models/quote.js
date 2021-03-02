const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
  quote: { type: String },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }
})

quoteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Quote', quoteSchema) 