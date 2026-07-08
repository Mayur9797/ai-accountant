import { Link } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>AI Accountant</h1>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Create Account</button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;