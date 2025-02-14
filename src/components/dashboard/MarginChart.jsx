// src/components/Dashboard/MarginChart.jsx
import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { lineData } from '../../data/Data';

const MarginChart = () => {
  return (
    <div className="dashboard-card margin-chart">
      <div className="card-header">
        <h3>Margin %</h3>
        <select className="time-select">
          <option>7 days</option>
        </select>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <YAxis 
              domain={[0, 100]}
              ticks={[25, 50, 75, 100]}
              stroke="#ffffff50"
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#90EE90"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarginChart;
