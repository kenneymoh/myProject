// define a function to get the weather for a given location
function getWeather(location) {
    // send a request to the OpenWeatherMap API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=YOUR_API_KEY')
      .then(response => response.json())
      .then(data => {
        // get the temperature in Celsius
        let temp = data.main.temp - 273.15;
  
        // print the temperature
        console.log('The weather in ' + location + ' is ' + temp + ' degrees Celsius.');
      });
  }
  
  // get the weather for London
  getWeather('London');
  