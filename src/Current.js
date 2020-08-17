import React, { useState } from "react";
import axios from "axios";
import "./Current.css";

export default function Current(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeather(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      feel: response.data.main.feels_like,
      temperature: response.data.main.temp,
      mintemp: response.data.main.temp_min,
      maxtemp: response.data.main.temp_max,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      cloudiness: response.data.clouds.all,
      iconUrl: `https://openweathermap.org/img/wn/${response.weather.icon}@2x.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <div className="d-flex flex-row justify-content-center current-date">
          Mon, 27 JUL
        </div>
        <div className="d-flex flex-row justify-content-center current-location">
          {weatherData.city}
        </div>
        <div className="d-flex flex-row justify-content-center current-feel">
          Feels like {Math.round(weatherData.feel)}°C
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="card card-current-weather">
            <div className="card-body card-body-current-weather">
              <div className="row">
                <div className="col-6 description-current">
                  {weatherData.description}
                </div>
                <div className="col-6 min-max-current">
                  <i className="fas fa-long-arrow-alt-down"></i>{" "}
                  {Math.round(weatherData.mintemp)}°C{" "}
                  <i className="fas fa-long-arrow-alt-up"></i>{" "}
                  {Math.round(weatherData.maxtemp)}°C
                </div>
              </div>
              <div className="row">
                <div className="col-6 emoji-current">
                  <img
                    className="icon"
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  ></img>
                </div>
                <div className="col-6 temperature-current">
                  {Math.round(weatherData.temperature)}°C
                </div>
              </div>
              <div className="row">
                <div className="col-4 humidity-current">
                  <i className="fas fa-tint"></i>{" "}
                  {Math.round(weatherData.humidity)}%
                </div>
                <div className="col-4 windspeed-current">
                  <i className="fas fa-wind"></i>{" "}
                  {Math.round(weatherData.windspeed)} KM/H
                </div>
                <div className="col-4 cloudiness-current">
                  <i className="fas fa-cloud"></i>{" "}
                  {Math.round(weatherData.cloudiness)}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center time-current">
          Last updated at 14:50
        </div>
      </div>
    );
  } else {
    const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
