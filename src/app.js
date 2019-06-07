const path = require('path')
const express = require('express');

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
    creator: 'Ruth Newman'
  })
})

app.get('/faq', (request, response) => {
  response.render('faq', {
    message: 'Answers to the most common queries'
  })
})

app.get('/weather', (request, response) => {
    response.send({
      location: 'London',
      forecast: 'Warm and sunny',
      celsius: 27
    })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
