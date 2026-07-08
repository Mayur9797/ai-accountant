import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>AI Accountant</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button onClick={() => navigate("/dashboard")}>
  Login
</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;