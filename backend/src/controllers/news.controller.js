const Advice = require('../models/news.model')

const getAllAdvices = async (req, res) => {
  try {
    const advices = await Advice.find({})
    res.status(200)
    res.json(advices)
  } catch (err) {
    console.log(console.log(err))
  }
}

const createAdvices = async (req, res) => {
  const { title, description, date, content, author, archiveDate } = req.body
  try {
    const newAdvices = await Advice.create({
      title, description, date, content, author, archiveDate
    })
    res.status(201).json(newAdvices)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const updateAdvices = async (req, res) => {
  try {
    const adviceUpdated = await Advice.updateOne({ _id: req.params.id }, { archiveDate: new Date() })
    res.status(201).json(adviceUpdated)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const deleteAdvices = async (req, res) => {
  try {
    const id = req.params.id
    await Advice.findByIdAndDelete(id)
      .then(() => {
        res.status(204).end()
      })
      .catch(err => console.log(err))
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

module.exports = {
  getAllAdvices, createAdvices, updateAdvices, deleteAdvices
}
