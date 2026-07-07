import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Our Features</h2>

      <div className="feature-box">

        <div className="card">
          <h3>💰 Income Management</h3>
          <p>Manage your income records easily and securely.</p>
        </div>

        <div className="card">
          <h3>💸 Expense Tracking</h3>
          <p>Track all your daily and monthly expenses.</p>
        </div>

        <div className="card">
          <h3>📊 Financial Reports</h3>
          <p>Generate financial reports with one click.</p>
        </div>

        <div className="card">
          <h3>🤖 AI Insights</h3>
          <p>Receive smart AI suggestions for better financial planning.</p>
        </div>

      </div>

    </section>
  );
}

export default Features; 