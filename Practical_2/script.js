document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.textContent = "Please enter a city name.";
    return;
  }

  const apiKey = "ef331e5c5cd2eb9c2359c443f0b54cc0"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      result.textContent = `The weather in ${city} is ${temp}°C`;
      result.style.color = "black";
    })
    .catch(error => {
      result.textContent = error.message;
      result.style.color = "darkred";
    });
});
