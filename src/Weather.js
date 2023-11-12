import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>Temperature: {Math.round(weather.temperature)}°C </ul>
        <ul>Description: {weather.description} </ul>
        <ul>Humidity: {weather.humidity}% </ul>
        <ul>Wind: {weather.wind}km/h </ul>
        <ul>
          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
