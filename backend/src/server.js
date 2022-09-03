require('./db/database')
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 5001
const advicesRouter = require('./routes/news.routes')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Server listening on port: ${PORT}`)
})

app.use(advicesRouter)

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})
