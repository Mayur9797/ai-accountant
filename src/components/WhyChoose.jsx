import "../styles/WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why">
      <h2>Why Choose AI Accountant?</h2>

      <div className="why-container">

        <div className="why-box">
          <h3>✔ Easy to Use</h3>
          <p>
            A simple and user-friendly interface for everyone.
          </p>
        </div>

        <div className="why-box">
          <h3>🔒 Secure Data</h3>
          <p>
            Your financial information is stored safely and securely.
          </p>
        </div>

        <div className="why-box">
          <h3>🤖 AI Powered</h3>
          <p>
            Get smart suggestions using Artificial Intelligence.
          </p>
        </div>

        <div className="why-box">
          <h3>📈 Reports</h3>
          <p>
            Generate financial reports with just one click.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;