const express = require('express')
const engine = require('express-handlebars').engine
const app = express()
const port = process.env.PORT || 8082

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static(__dirname + "/static"));

app.get('/', (req, res) => {
  // res.sendFile(process.cwd().concat('/routes/index.html')) 
  res.render('home')              
})

app.get('/github-icon.svg', (req, res) => {
  console.log('-----', process.cwd().concat('/github-icon.svg'))
  res.sendFile(process.cwd().concat('/images/github-icon.svg'))
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
  res.render('bmi')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
