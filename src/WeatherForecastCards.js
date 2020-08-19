import React from "react";
import "./WeatherForecastCards.css";

export default function WeatherForecastCards(props) {
  function showForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = days[date.getDay()];
    return `${day}`;
  }

  function showForecastMinTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }

  function showForecastMaxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }

  function showForecastHumidity() {
    let humidity = Math.round(props.data.humidity);
    return `${humidity}`;
  }

  function showForecastIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    let description = props.data.weather[0].description;
    return <img className="icon" src={icon} alt={description}></img>;
  }

  return (
    <div className="WeatherForecastCards">
      <div className="d-flex flex-column">
        <div className="card">
          <div className="card-body card-next">
            <div className="card-row">{showForecastDay()}</div>
            <div className="card-row">{showForecastIcon()}</div>
            <div className="card-row">
              <i className="fas fa-long-arrow-alt-down"></i>{" "}
              {showForecastMinTemp()}°C
            </div>
            <div className="card-row">
              <i className="fas fa-long-arrow-alt-up"></i>{" "}
              {showForecastMaxTemp()}°C
            </div>
            <div className="card-row">
              <i className="fas fa-tint"></i> {showForecastHumidity()}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
