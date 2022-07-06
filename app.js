const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  res.sendFile(process.cwd().concat('/routes/index.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile(process.cwd().concat('/style.css'))
})

app.get('/about', (req, res) => {
  res.sendFile(process.cwd().concat('/routes/about.html'))
})

app.get('/services', (req, res) => {
  res.sendFile(process.cwd().concat('/routes/services.html'))
})

app.get('/BMI', (req, res) => {
  res.sendFile(process.cwd().concat('/routes/bmi.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(process.cwd().concat('/routes/contact.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
