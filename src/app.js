const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');

const app = express()

const port = process.env.PORT || 3000;

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
  if (!request.query.city) {
    return response.send({
      error: 'A city name must be provided'
    })
  }
    geocode(request.query.city, (error, {latitude, longitude, location} = {}) => {
      if (error) {
        return response.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return response.send({ error });
        }
        response.send({
          forecast: forecastData,
          location: location,
          city: request.query.city,
        })
      })
    })
})

app.get('/products', (request, response) => {
  if (!request.query.search) {
    return response.send({
      error: 'You must provide a search term'
    })
  }
  console.log(request.query.search)
  response.send({
    products: []
  })
})

app.get('*', (request, response) => {
  response.render('404', {
    errorMessage: 'Page Not Found',
    title: '404',
    name: 'Ruth Newman'
  })
})

app.listen(port, () => {
  console.log('Running on port ' + port)
})
