import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
    
  const navigate = useNavigate();

  const [rollNo, setRollNo] = useState("");
  const [regno, setRegno] = useState("");
  const [error, setError] = useState("");

    const handleSubmit = () => {
  if (
    rollNo === "134137" &&
    regno === "SRO0736529"
  ) {
    navigate("/result");
  } else {
    setError("Invalid Credentials");
  }
};
  


  return (
   <Layout>
 {error && (
      <div className="popup-overlay">
        <div className="popup-box">
          <h3>Error</h3>

          <p>{error}</p>

          <button onClick={() => setError("")}>
            OK
          </button>
        </div>
      </div>
    )}

  <div className="login-container">
    <h2 className="login-title">
      Final - Result
    </h2>

    <p className="login-subtitle">
      Enter your 6 Digit Roll Number to check your results
    </p>

    <div className="form-group">
      <label>Roll No.</label>
      <input
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>PIN No.</label>
      <input/>
    </div>

    <div className="or-divider">OR</div>

    <div className="form-group">
      <label>Registration No.</label>
      <input 
      value={regno}
      onChange={(e) => setRegno(e.target.value)}
      />
    </div>

    <button
      className="submit-btn"
      onClick={handleSubmit}
    >
      SUBMIT
    </button>
  </div>
</Layout>
  );
}