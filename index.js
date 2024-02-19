
const express = require('express')

const app = express()
const nil = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/row', (req, res) => {
    res.send('i am row agent')
  })
  app.get('/student', (req, res) => {
    res.send('<h1>i am student</h1>')
  })

  app.get('/Chai', (req, res) => {
    res.send('<h2>chai aur code</h2>')
  })


app.listen(nil, () => {
  console.log(`Example app listening on port ${3000}`)
})