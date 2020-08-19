import React, { useState } from "react";
import axios from "axios";
import WeatherForecastCards from "./WeatherForecastCards.js";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState("");

  function showForecast(response) {
    setForecastData(response.data);
    console.log(response.data);
    setLoaded(true);
  }

  if (
    loaded &&
    props.lat === forecastData.lat &&
    props.lon === forecastData.lon
  ) {
    return (
      <div className="WeatherForecast">
        <div className="d-flex flex-row justify-content-center">
          <WeatherForecastCards data={forecastData.daily[1]} />
          <WeatherForecastCards data={forecastData.daily[2]} />
          <WeatherForecastCards data={forecastData.daily[3]} />
          <WeatherForecastCards data={forecastData.daily[4]} />
          <WeatherForecastCards data={forecastData.daily[5]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "5105e9ba47cefb06b8ba8c75ae83f74e";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=${unit}&exclude=hourly,minutely`;
    axios.get(`${apiUrl}`).then(showForecast);

    return null;
  }
}
