console.log('Client side JS file loaded')

const weatherForm = document.querySelector('form');
const searchInput = document.querySelector('input');
const weatherInfo = document.querySelector('#weatherInfo');
const weatherInfoMessage = document.querySelector('#weatherInfoMessage');

weatherInfo.textContent = '';

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const city = searchInput.value;

  weatherInfo.textContent = 'Getting the weather forecast for ' + city + '.'
  weatherInfoMessage.textContent = '';
  searchInput.value = '';
  fetch('http://localhost:3000/weather?city=' + city)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        weatherInfo.textContent = data.error;
      } else {
        weatherInfo.textContent = data.location;
        weatherInfoMessage.textContent = data.forecast;
      }
    })
})
