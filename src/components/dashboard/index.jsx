// src/components/Dashboard/index.jsx
import React from 'react';
import { Settings } from 'lucide-react';
import InventoryCard from './InventoryCard';
import OrdersCard from './OrdersCard';
import BatteryCard from './BatteryCard';
import MarginChart from './MarginChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Analytics Dashboard</h1>
        <button className="logout-btn">Logout</button>
      </header>

      <div className="dashboard-content">
        <div className="sidebar">
          <button className="settings-btn">
            <Settings size={24} />
          </button>
        </div>

        <div className="dashboard-grid">
          <InventoryCard />
          <OrdersCard />
          <BatteryCard />
          <MarginChart />
        </div>
      </div>

      <footer className="dashboard-footer">
        © 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
