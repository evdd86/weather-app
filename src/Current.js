import React, { useState } from "react";
import axios from "axios";
import "./Current.css";

export default function Current() {
  let [feel, setFeel] = useState("");
  let [temperature, setTemperature] = useState("");
  let [mintemp, setMintemp] = useState("");
  let [maxtemp, setMaxtemp] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [windspeed, setWindspeed] = useState("");
  let [cloudiness, setCloudiness] = useState("");
  let [icon, setIcon] = useState("");

  const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.result}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(showWeather);

  function showWeather(response) {
    console.log(response);
    setFeel(response.data.main.feels_like);
    setTemperature(response.data.main.temp);
    setMintemp(response.data.main.temp_min);
    setMaxtemp(response.data.main.temp_max);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWindspeed(response.data.wind.speed);
    setCloudiness(response.data.clouds.all);
    setIcon(response.data.weather[0].icon);
  }

  return (
    <div className="Current">
      <div className="d-flex flex-row justify-content-center current-date">
        Mon, 27 JUL
      </div>
      <div className="d-flex flex-row justify-content-center current-location">
        Brussels
      </div>
      <div className="d-flex flex-row justify-content-center current-feel">
        Feels like {Math.round(feel)}°C
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="card card-current-weather">
          <div className="card-body card-body-current-weather">
            <div className="row">
              <div className="col-6 description-current">{description}</div>
              <div className="col-6 min-max-current">
                <i className="fas fa-long-arrow-alt-down"></i>{" "}
                {Math.round(mintemp)}°C{" "}
                <i className="fas fa-long-arrow-alt-up"></i>{" "}
                {Math.round(maxtemp)}°C
              </div>
            </div>
            <div className="row">
              <div className="col-6 emoji-current">
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="icon"
                ></img>
              </div>
              <div className="col-6 temperature-current">
                {Math.round(temperature)}°C
              </div>
            </div>
            <div className="row">
              <div className="col-4 humidity-current">
                <i className="fas fa-tint"></i> {Math.round(humidity)}%
              </div>
              <div className="col-4 windspeed-current">
                <i className="fas fa-wind"></i> {Math.round(windspeed)} KM/H
              </div>
              <div className="col-4 cloudiness-current">
                <i className="fas fa-cloud"></i> {Math.round(cloudiness)}%
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
}
