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
  res.render('home')              
})

app.get('/style.css', (req, res) => {
  res.sendFile(process.cwd().concat('/style.css'))
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/services', (req, res) => {
  res.render('services')
})

app.get('/BMI', (req, res) => {
  res.render('BMI')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
