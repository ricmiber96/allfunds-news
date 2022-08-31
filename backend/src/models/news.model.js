// const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const adviceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  archiveDate: { type: Date }
}, {
  timestamps: true
})
// const adviceSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   date: Date,
//   content: String,
//   author: String,
//   archiveDate: Date
// }, {
//   timestamps: true
// })

const Advice = model('Advice', adviceSchema)
// const Advice = mongoose.model('Advice', adviceSchema)

module.exports = Advice
