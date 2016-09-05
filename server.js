var express = require('express')
var app = express()

var hbs = require('express-handlebars')
var blogs = require('./blogs')
var path = require('path')

app.listen(3020, function () {
  console.log('listening on port 3020')
})

app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.render('index', blogs)
})

app.get('/blog/:id', function (req, res) {
  res.render('blogpost', blogs.blogs[req.params.id])
})
