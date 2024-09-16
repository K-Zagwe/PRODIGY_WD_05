document.getElementById('search-btn').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e727bac3edb0b0be98a6444762dd41f1`;
  const response = await fetch(apiURL);
  const data = await response.json();
  if (data.cod === 200) {
    displayWeather(data);
  } else {
    alert('City not found!');
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temp = data.main.temp;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${icon}.png`;

  document.getElementById('city-name').textContent = `City: ${cityName}`;
  document.getElementById('temperature').textContent = `Temperature: ${temp} °C`;
  document.getElementById('description').textContent = `Description: ${description}`;
  document.getElementById('weather-icon').src = iconURL;

  document.getElementById('weather-info').style.display = 'block';
}
