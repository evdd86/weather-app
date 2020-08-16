import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="Overview">
      <div className="d-flex flex-row justify-content-center current-date">
        Mon, 27 JUL
      </div>
      <div className="d-flex flex-row justify-content-center current-location">
        Brussels
      </div>
      <div className="d-flex flex-row justify-content-center current-feel">
        Feels like 10°C
      </div>
    </div>
  );
}
