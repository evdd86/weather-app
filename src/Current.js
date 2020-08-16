import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="d-flex flex-row justify-content-center">
        <div className="card card-current-weather">
          <div className="card-body card-body-current-weather">
            <div className="row">
              <div className="col-6 description-current">Scattered clouds</div>
              <div className="col-6 min-max-current">
                <i className="fas fa-long-arrow-alt-down"></i> 10°C{" "}
                <i className="fas fa-long-arrow-alt-up"></i> 20°C
              </div>
            </div>
            <div className="row">
              <div className="col-6 emoji-current">
                <i className="fas fa-sun"></i>
              </div>
              <div className="col-6 temperature-current">20°C</div>
            </div>
            <div className="row">
              <div className="col-4 humidity-current">
                <i className="fas fa-tint"></i> 10%
              </div>
              <div className="col-4 windspeed-current">
                <i className="fas fa-wind"></i> 20KM/H
              </div>
              <div className="col-4 cloudiness-current">
                <i className="fas fa-cloud"></i> 40%
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
