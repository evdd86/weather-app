import React from "react";
import Cards from "./Cards.js";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="d-flex flex-row justify-content-center">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
