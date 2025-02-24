const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");


if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}


currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);



const scrollToTopButton = document.querySelector(".scroll-to-top-button");

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {

  if (window.scrollY > 800) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});