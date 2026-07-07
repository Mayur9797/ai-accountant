import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Our Features</h2>

      <div className="feature-container">

        <div className="feature-box">
          <h3>📊 Income Tracking</h3>
          <p>Add and manage your income records easily.</p>
        </div>

        <div className="feature-box">
          <h3>💸 Expense Management</h3>
          <p>Track all your daily and monthly expenses.</p>
        </div>

        <div className="feature-box">
          <h3>📈 Financial Reports</h3>
          <p>View clear reports of your income and expenses.</p>
        </div>

        <div className="feature-box">
          <h3>🤖 AI Suggestions</h3>
          <p>Get smart financial insights powered by AI.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;