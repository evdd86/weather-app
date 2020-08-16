import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form d-flex flex-row justify-content-center">
      <form className="input-group mb-3">
        <input
          type="text"
          className="form-control input-search-city"
          placeholder="Search a city or use current location."
          aria-label="Search city."
          aria-describedby="button-addon1"
          autoComplete="off"
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
  );
}
