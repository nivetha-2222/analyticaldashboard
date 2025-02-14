export const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const expiry = Date.now() + 30000; // Expire in 30 seconds
    localStorage.setItem("otp", JSON.stringify({ otp, expiry }));
    alert(`Your OTP is: ${otp}`);
  }; 
  export const verifyOTP = (inputOtp) => {
    const storedData = JSON.parse(localStorage.getItem("otp"));
    if (!storedData) return { status: false, message: "OTP not found" };
  
    const { otp, expiry } = storedData;
    if (Date.now() > expiry) {
      return { status: false, message: "OTP expired" };
    }
  
    if (parseInt(inputOtp) === otp) {
      localStorage.removeItem("otp");
      return { status: true, message: "OTP verified" };
    }
    return { status: false, message: "Incorrect OTP" };
  };
  