const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express()
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get('', (request, response) => {
  response.render('index', {
    title: 'Clima Info',
    name: 'Ruth Newman'
  })
})

app.get('/about', (request, response) => {
  response.render('about', {
    title: 'About Me',
    name: 'Ruth Newman'
  })
})

app.get('/faq', (request, response) => {
  response.render('faq', {
    title: 'Frequently Asked Questions',
    name: 'Ruth Newman',
    message: 'Answers to the most common queries'
  })
})

app.get('/faq/*', (request, response) => {
  response.render('404', {
    title: '404',
    name: 'Ruth Newman',
    errorMessage: 'Question Not Found'
  })
})

app.get('/weather', (request, response) => {
    response.send({
      location: 'London',
      forecast: 'Warm and sunny',
      celsius: 27
    })
})

app.get('*', (request, response) => {
  response.render('404', {
    errorMessage: 'Page Not Found',
    title: '404',
    name: 'Ruth Newman'
  })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})