const apiKey = "fd32499ffb661a7557777b6f24fb5590";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Hide the error message initially
    document.querySelector(".error").style.display = "none";

    if (response.status == 404) {
        // Display an error message if the city is not found
        document.querySelector(".error").innerText = "City not found. Please try again.";
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"; // Hide weather details
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;

        // Update weather icon based on condition
        if (weatherCondition === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherCondition === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherCondition === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (weatherCondition === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherCondition === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (weatherCondition === "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (weatherCondition === "Haze") {
            weatherIcon.src = "images/haze.png";
        }

        // Show weather details
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
