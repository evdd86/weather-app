import React, { useState } from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo.js";
import WeatherForecast from "./WeatherForecast.js";
import "./Form.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      feel: response.data.main.feels_like,
      temperature: response.data.main.temp,
      mintemp: response.data.main.temp_min,
      maxtemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <div className="d-flex flex-row justify-content-center">
          <form onSubmit={handleSubmit} className="input-group mb-3">
            <input
              type="text"
              className="form-control input-search-city"
              placeholder="Search a city or use current location."
              aria-label="Search city."
              aria-describedby="button-addon1"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary button-form"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn btn-outline-secondary button-form"
                type="button"
              >
                Current
              </button>
            </div>
          </form>
        </div>
        <CurrentInfo data={weatherData} />
        <WeatherForecast lat={weatherData.lat} lon={weatherData.lon} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
