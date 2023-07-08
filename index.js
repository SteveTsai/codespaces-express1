const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello steve1!')
})

app.get('/v1', (req, res) => {
  res.send('Hello v1!')
})

app.get('/v2', (req, res) => {
  res.send('Hello Ben v2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
