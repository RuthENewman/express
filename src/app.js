const path = require('path')
const express = require('express');

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.use(express.static(publicDirPath))

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
