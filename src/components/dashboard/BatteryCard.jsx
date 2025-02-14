// src/components/Dashboard/BatteryCard.jsx
import React from 'react';

const BatteryCard = () => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Battery</h3>
        <button className="menu-btn">•••</button>
      </div>
      <div className="battery-container">
        <div className="battery-progress">
          <svg viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4169E1"
              strokeWidth="3"
              strokeDasharray="65, 100"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#FFD700"
              strokeWidth="3"
              strokeDasharray="35, 100"
            />
          </svg>
          <div className="battery-percentage">65%</div>
        </div>
      </div>
      <div className="battery-legend">
        <div className="legend-item">
          <div className="legend-color remaining"></div>
          <span>Remaining</span>
        </div>
        <div className="legend-item">
          <div className="legend-color consumed"></div>
          <span>Consumed</span>
        </div>
      </div>
    </div>
  );
};

export default BatteryCard;