import IncomeChart from "../components/IncomeChart";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>AI Accountant Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="cards">

        <div className="card">
          <h3>💰 Total Balance</h3>
          <p>₹50,000</p>
        </div>

        <div className="card">
          <h3>📈 Total Income</h3>
          <p>₹80,000</p>
        </div>

        <div className="card">
          <h3>💸 Total Expense</h3>
          <p>₹30,000</p>
        </div>

        <div className="card">
          <h3>📊 Savings</h3>
          <p>₹20,000</p>
        </div>

      </div>

      {/* Chart Section */}
      <IncomeChart />
      {/* Quick Actions */}
      <div className="actions">

        <h2>⚡ Quick Actions</h2>

        <div className="action-buttons">

          <button className="action-btn">
            ➕ Add Income
          </button>

          <button className="action-btn">
            ➖ Add Expense
          </button>

          <button className="action-btn">
            📊 Generate Report
          </button>

          <button className="action-btn">
            🤖 AI Analysis
          </button>

        </div>

      </div>

      {/* AI Suggestion */}
      <div className="ai-box">

        <h2>🤖 AI Suggestion</h2>

        <p>
          You spent 25% more on Food this month.
          Try reducing restaurant expenses to save more.
        </p>

      </div>

      {/* Recent Transactions */}
      <div className="table-box">

        <h2>Recent Transactions</h2>

        <table>

          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>07 Jul</td>
              <td>Salary</td>
              <td>+ ₹50,000</td>
            </tr>

            <tr>
              <td>06 Jul</td>
              <td>Food</td>
              <td>- ₹450</td>
            </tr>

            <tr>
              <td>05 Jul</td>
              <td>Shopping</td>
              <td>- ₹2,100</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;