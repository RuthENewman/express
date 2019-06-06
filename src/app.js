const express = require('express');

const app = express()

app.get('', (request, response) => {
  response.send('<h1>Weather</h1>')
})

app.get('/faq', (request, response) => {
  response.send([{
    name: 'Ruth',
    age: 30
  }, {
    name: 'Sarah',
    age: 25
  }])
})

app.get('/about', (request, response) => {
  response.send('<h1>About this application</h1>')
})

app.get('/weather', (request, response) => {
    response.send({
      location: 'London',
      forecast: 27
    })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
