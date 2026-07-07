import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <h1>AI Accountant</h1>

      <h2>Manage Your Finance with AI</h2>

      <p>
        Track your income, expenses and financial reports in one place.
      </p>

      <button>Get Started</button>

      {/* Features Section */}
      <div className="features">
        <h2>Our Features</h2>

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
    </div>
  );
}

export default App;