const express = require('express')
const { getAllAdvices, createAdvices } = require('../controllers/news.controller')

const advicesRouter = express.Router()

advicesRouter.get('/api/news', getAllAdvices)
advicesRouter.post('/api/news', createAdvices)

module.exports = advicesRouter
