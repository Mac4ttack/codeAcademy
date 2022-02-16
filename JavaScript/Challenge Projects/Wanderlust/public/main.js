require('dotenv').config()

// Foursquare API Info
const foursquareKey = REACT_APP_FOURSQUARE;
const url = 'https://api.foursquare.com/v3/places/search?near=';

// OpenWeather Info
const openWeatherKey = REACT_APP_WEATHER;
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq3zeK0Cjg422kpPLEQMEKe9yLcrKmrV9Ax/jOSyTT7064='
  }
};

// AJAX functions
const getPlaces = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10`;

  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      const places = jsonResponse.results;
      return places;
    }
  } catch (error) {
    console.log(error);
  }
};

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Render functions
const renderPlaces = (places) => {
  $placeDivs.forEach(($place, index) => {
    const place = places[index];
    const placeIcon = place.categories[0].icon;
    const placeImgSrc = `${placeIcon.prefix}bg_64${placeIcon.suffix}`;
    const placeContent = createPlaceHTML(place.name, place.location, placeImgSrc);
    $place.append(placeContent);
  });
  $destination.append(`<h2>${places[0].location.locality}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  //Using HTML template: 
  //const weatherContent = '<h2>' + weekDays[(new Date()).getDay()] + '</h2> <h2>Temperature: ' + ((day.main.temp - 273.15) * 9 / 5 + 32).toFixed(0) + '&deg;F</h2> <h2>Condition: ' + day.weather[0].description + '</h2> <img src="https://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png">'
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $placeDivs.forEach(place => place.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css('visibility', 'visible');
  getPlaces().then(places => renderPlaces(places));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);