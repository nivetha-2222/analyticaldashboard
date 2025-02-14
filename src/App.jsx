import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import EmailInput from "./screens/EmailInput";
import OTPInput from "./screens/OTPInput";
import Dashboard from "./screens/Dashboard";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailInput />} />
        <Route path="/otp" element={<OTPInput />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
};

export default App;
