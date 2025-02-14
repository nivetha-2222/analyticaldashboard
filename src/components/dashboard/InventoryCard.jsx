// src/components/Dashboard/InventoryCard.jsx
import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { lineData } from '../../data/Data';

const InventoryCard = () => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div>
          <h3>Inventory</h3>
          <p className="metric">93%</p>
        </div>
        <select className="time-select">
          <option>7 days</option>
        </select>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <YAxis hide domain={[0, 100]} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#FFD700"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InventoryCard;
