import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="Cards">
      <div className="d-flex flex-column">
        <div className="card">
          <div className="card-body card-next">
            <div className="card-row">TUE</div>
            <div className="card-row">
              <i className="fas fa-sun"></i>
            </div>
            <div className="card-row">
              <i className="fas fa-long-arrow-alt-down"></i> 10°C
            </div>
            <div className="card-row">
              <i className="fas fa-long-arrow-alt-up"></i> 20°C
            </div>
            <div className="card-row">
              <i className="fas fa-tint"></i> 20%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
