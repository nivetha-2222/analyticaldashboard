import React, { useEffect } from 'react';
import { Settings, Home } from 'lucide-react';
import InventoryCard from '../components/dashboard/InventoryCard';
import OrdersCard from '../components/dashboard/OrdersCard';
import BatteryCard from '../components/dashboard/BatteryCard';
import MarginChart from '../components/dashboard/MarginChart';
import '../components/dashboard/Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      // Prevent navigation to the previous page (login/otp)
      navigate("/dashboard", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <div className="dashboard">
          <div className="dashboard-content">
            <div className="sidebar">
              <button className="home-btn">
                <Home size={24} />
              </button>
              <button className="settings-btn">
                <Settings size={24} />
              </button>
            </div>
            <div className="dashboard-columns">
              <div className="dashboard-column">
                <InventoryCard />
                <OrdersCard />
              </div>
              <div className="dashboard-column">
                <BatteryCard />
              </div>
              <div className="dashboard-column">
                <MarginChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
