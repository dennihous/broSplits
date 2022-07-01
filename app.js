const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  console.log(process.cwd())
  res.sendFile(process.cwd().concat('/index.html'))
})

app.get('/style.css', (req, res) => {
  res.sendFile('/Users/dennishouston/Projects/broSplits/broSplits/style.css')
})

app.get('/about', (req, res) => {
  res.sendFile('/Users/dennishouston/Projects/broSplits/broSplits/about.html')
})

app.get('/')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
