async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const weatherResult = document.getElementById("weatherResult");

    const city = cityInput.value.trim();
    const apiKey = "84bb59de7dd8ea80435ca6f5c9b7dfeb";

    if (city === "") {
        weatherResult.textContent = "Please enter a city.";
        return;
    }

    weatherResult.textContent = "Loading weather...";

    try {
        const url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            encodeURIComponent(city) +
            "&appid=" + apiKey +
            "&units=metric";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const currentTime = new Date().toLocaleTimeString();

        weatherResult.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡️ Temperature: ${Math.round(data.main.temp)}°C</p>
    <p>☁️ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🕒 Updated: ${currentTime}</p>
`;
    } catch (error) {
        weatherResult.textContent =
            "Could not find that city. Check the spelling and try again.";
    }
}

// Press Enter to search
document.getElementById("cityInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});
function clearWeather() {
    document.getElementById("cityInput").value = "";
    document.getElementById("weatherResult").innerHTML = "";
}