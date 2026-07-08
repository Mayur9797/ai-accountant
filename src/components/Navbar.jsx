import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        AI Accountant
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;