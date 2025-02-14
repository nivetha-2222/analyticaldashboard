import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../components/button.css";
import "../components/login.css";

const  EmailInput = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const handleValidation = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid Gmail address.");
      return;
    }
    setError("");
    navigate("/otp"); 
  };
  return (
    <div className="page-container">
      
      <Header />

      {/* Main Content */}
      <div className="content">
      <main className="card">
        <div className="left-section">
          <h2 className="sign-in-title">Sign In</h2>
          <input
           type="email"
           placeholder="E-mail"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           aria-label="Gmail ID"
           className="input"
           autoFocus
          />
          <button className="send-otp-button" onClick={handleValidation} disabled={!email || !validateEmail(email)}>Send OTP</button>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="right-section">
          <p className="description">Web Application with Analytics Dashboard</p>
        </div>
      </main>
      </div>

      
      <Footer />
    </div>
  );
};

export default  EmailInput;
