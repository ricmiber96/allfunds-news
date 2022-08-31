require('./db/database')
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5001
const advicesRouter = require('./routes/advices.routes')
const Advice = require('./models/news.model')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Server listening on port: ${PORT}`)
})

app.use(advicesRouter)

// app.get('/api/notes', (req, res) => {
//   Advice.find({})
//     .then(advices => {
//       res.json(advices)
//     })
//     .catch(err => { console.error(err) })
// })

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})
