const { Schema, model } = require('mongoose')

const newSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  content: String,
  author: String,
  archiveDate: Date
})

const News = model('News', newSchema)

module.exports = News
