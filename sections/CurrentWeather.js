function displayCurrentWeather(city) {

  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  console.log(currentWeatherEndpoint);

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);
      console.log(day);
      const hours = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      console.log(weather[0].icon)

      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = Math.round(windToKmPerHour(wind.speed));


      const currentWeatherContainer = document.querySelector(".current-weather");
      currentWeatherContainer.innerHTML = `
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
          <p class="fs-5 text-capitalize">${weatherDescription}</p>
          <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
        </div>
      `;
    });
}