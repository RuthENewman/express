const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const forecastURL = "https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/" + latitude + "," + longitude + "?" + "units=si";
  request({url: forecastURL, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect and retrieve the latest weather information for your location', undefined)
    } else if (body.error){
      callback('Unable to find your location', undefined)
    } else {
      const currentlyData = body.currently;
      const dailyData = body.daily;
      callback(undefined, dailyData.data[0].summary
                 + ' It is currently '
                 + currentlyData.temperature
                 + ' C. There is a '
                 + currentlyData.precipProbability
                 + '% chance of rain.' )
    }
  })
}

module.exports = forecast;
