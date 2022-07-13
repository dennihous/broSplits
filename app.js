const express = require('express')
const engine = require('express-handlebars').engine
const app = express()
const port = process.env.PORT || 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  // res.sendFile(process.cwd().concat('/routes/index.html')) 
  res.render('home', {name: 'Dennis'})              
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
