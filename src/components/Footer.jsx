import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>AI Accountant</h2>
          <p>
            Smart AI-powered finance management for tracking income,
            expenses, and financial reports.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Features</p>
          <p>About</p>
          <p>Login</p>
          <p>Sign Up</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 support@aiaccountant.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Gujarat, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 AI Accountant. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;