import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../components/button.css";
import "../components/login.css";

const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

const OTPInput = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [storedOtp, setStoredOtp] = useState(null);
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [hasOtpAlerted, setHasOtpAlerted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingOtp = localStorage.getItem("otp");
    const otpToDisplay = existingOtp || generateOTP();
    localStorage.setItem("otp", otpToDisplay);
    setStoredOtp(otpToDisplay);
  }, []);

  useEffect(() => {
    if (storedOtp && !hasOtpAlerted) {
      alert(`Your OTP is: ${storedOtp}`); // Remove in production
      setHasOtpAlerted(true);
    }
  }, [storedOtp, hasOtpAlerted]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Disable back navigation to the email page
  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true }); // Redirect to home or a safe page
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  const handleVerifyOTP = () => {
    if (otp.length !== 4) {
      setError("Please enter a 4-digit OTP.");
      return;
    }

    const latestOtp = localStorage.getItem("otp");
    if (!latestOtp) {
      setError("OTP not found. Please resend the OTP.");
      return;
    }

    if (otp === latestOtp) {
      localStorage.removeItem("otp");
      localStorage.setItem("isLoggedIn", true); // Set login flag
      navigate("/dashboard", { replace: true }); // Clear the history stack
    } else {
      setError("Incorrect OTP. Please try again.");
    }
  };

  const handleResendOTP = () => {
    const newOtp = generateOTP();
    localStorage.setItem("otp", newOtp);
    setStoredOtp(newOtp);
    setHasOtpAlerted(false);
    setTimer(30);
    setIsResendDisabled(true);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input)) {
      setOtp(input);
      if (error) setError(""); // Clear error on input
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <main className="card">
          <div className="left-section">
            <h2 className="sign-in-title">Enter OTP sent to Email</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleInputChange}
              aria-label="OTP Field"
              className="input"
              autoFocus
            />
            <div className="resend-container">
              <button
                onClick={handleResendOTP}
                className="resend-otp-button"
                disabled={isResendDisabled}
              >
                Resend OTP
              </button>
              <span className="timer-text" aria-live="polite">
                {isResendDisabled ? `0:${timer < 10 ? `0${timer}` : timer} sec` : `0:00 sec`}
              </span>
            </div>
            {error && <p className="error">{error}</p>}
            <button
              onClick={handleVerifyOTP}
              className="send-otp-button"
              disabled={otp.length !== 4}
            >
              Validate
            </button>
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

export default OTPInput;
