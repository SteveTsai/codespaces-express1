const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/home.html'))
})

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '/public')));

app.get('/v1', (req, res) => {
  res.send('Hello v1!')
})

app.get('/v2', (req, res) => {
  res.send('Hello Ben v2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
