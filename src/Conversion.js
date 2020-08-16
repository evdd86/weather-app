import React from "react";
import "./Conversion.css";

export default function Conversion() {
  return (
    <div className="Conversion">
      <div className="d-flex flex-row justify-content-center align-items-center choose-unit">
        Show degrees in
        <button className="button" id="button-temperature-today-celcius">
          °C
        </button>
        or
        <button className="button" id="button-temperature-today-fahrenheit">
          °F
        </button>
      </div>
    </div>
  );
}
