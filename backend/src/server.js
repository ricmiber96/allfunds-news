const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send(`Server listening on port: ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
