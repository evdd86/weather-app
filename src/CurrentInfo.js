import React from "react";
import FormattedDate from "./FormattedDate.js";
import FormattedTime from "./FormattedTime.js";
import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  return (
    <div className="CurrentInfo">
      <div className="d-flex flex-row justify-content-center current-date">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="d-flex flex-row justify-content-center current-location">
        {props.data.city}
      </div>
      <div className="d-flex flex-row justify-content-center current-feel">
        Feels like {Math.round(props.data.feel)}°C
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="card card-current-weather">
          <div className="card-body card-body-current-weather">
            <div className="row">
              <div className="col-6 description-current">
                {props.data.description}
              </div>
              <div className="col-6 min-max-current">
                <i className="fas fa-long-arrow-alt-down"></i>{" "}
                {Math.round(props.data.mintemp)}°C{" "}
                <i className="fas fa-long-arrow-alt-up"></i>{" "}
                {Math.round(props.data.maxtemp)}°C
              </div>
            </div>
            <div className="row">
              <div className="col-6 emoji-current">
                <img
                  className="icon"
                  src={props.data.iconUrl}
                  alt={props.data.description}
                ></img>
              </div>
              <div className="col-6 temperature-current">
                {Math.round(props.data.temperature)}°C
              </div>
            </div>
            <div className="row">
              <div className="col-4 humidity-current">
                <i className="fas fa-tint"></i>{" "}
                {Math.round(props.data.humidity)}%
              </div>
              <div className="col-4 windspeed-current">
                <i className="fas fa-wind"></i>{" "}
                {Math.round(props.data.windspeed)} KM/H
              </div>
              <div className="col-4 cloudiness-current">
                <i className="fas fa-cloud"></i>{" "}
                {Math.round(props.data.cloudiness)}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center time-current">
        <FormattedTime time={props.data.date} />
      </div>
    </div>
  );
}
