const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");

const aradButton = document.querySelector(".dropdown-menu .arad");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");

console.log(bucharestButton, timisoaraButton, oradeaButton);

function updateCurrentCityName(city) {

  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {

  localStorage.setItem("city", city);

  updateCurrentCityName(city);

  displayCurrentWeather(city);

  displayWeatherForecast(city);
}


bucharestButton.addEventListener("click", function () {
  updateWeather("București");
});
timisoaraButton.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradeaButton.addEventListener("click", function () {
  updateWeather("Oradea");
});



aradButton.addEventListener("click", function () {
  updateWeather("Arad");
});

sibiuButton.addEventListener("click", function () {
  updateWeather("Sibiu");
});