const API_KEY = WEATHER_API_KEY; // weather_api_key is in the server-private.js.
function onGeoOk(location) {
  const lat = location.coords.latitude;
  const lon = location.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(res => res.json()).then(
    data => {
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      const weather = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main}/${parseInt(data.main.temp)}`;
    }
  );
}

function onGeoError() {
  console.log("can't find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);