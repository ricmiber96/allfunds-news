const express = require('express')
const { getAllAdvices, createAdvices, updateAdvices, deleteAdvices } = require('../controllers/news.controller')

const advicesRouter = express.Router()

advicesRouter.get('/api/news', getAllAdvices)
advicesRouter.post('/api/news', createAdvices)
advicesRouter.put('/api/archived/:id', updateAdvices)
advicesRouter.delete('/api/news/:id', deleteAdvices)

module.exports = advicesRouter
