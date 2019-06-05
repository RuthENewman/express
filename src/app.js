const express = require('express');

const app = express()

app.get('', (request, response) => {
  response.send('Hello Express')
})

app.get('/faq', (request, response) => {
  response.send('Frequently Asked Questions')
})

app.get('/about', (request, response) => {
  response.send('About this application')
})

app.get('/weather', (request, response) => {
    response.send('Find the weather in your location')
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
