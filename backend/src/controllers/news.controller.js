const News = require('../models/news.model')

const getAllAdvices = async (req, res) => {
  try {
    const news = await News.find({})
    res.status(200)
    res.json(news)
  } catch (err) {
    console.log(console.log(err))
  }
}

const createAdvices = async (req, res) => {
  const { title, description, date, content, author, archiveDate } = req.body
  try {
    const newAdvices = await News.create({
      title, description, date, content, author, archiveDate
    })
    res.status(201).json(newAdvices)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

module.exports = {
  getAllAdvices, createAdvices
}
