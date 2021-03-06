import React from "react";
import Form from "./Form";
import Forecast from "./Forecast";
import Conversion from "./Conversion";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="weather-app border border-light">
          <section className="search-city">
            <Form defaultCity="Brussels" />
          </section>
          <section className="weather-next">
            <Forecast />
          </section>
          <section className="unit-conversion">
            <Conversion />
          </section>
        </section>
      </div>
      <div className="footer">
        <small className="open-code">
          <a
            href="https://github.com/evdd86/weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <br />
          Coded by Ellen Van der Donckt
        </small>
      </div>
    </div>
  );
}
