const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  console.log(process.cwd())
  res.sendFile('/Users/dennishouston/Projects/broSplits/broSplits/index.html')
})

app.get('/')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
