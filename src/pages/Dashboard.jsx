import IncomeChart from "../components/IncomeChart";
import ExpensePieChart from "../components/ExpensePieChart";
import Notification from "../components/Notification";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">AI Accountant Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="cards">

        <div className="card balance">
          <div className="icon">💰</div>
          <h3>Total Balance</h3>
          <h2>₹50,000</h2>
        </div>

        <div className="card income-card">
          <div className="icon">📈</div>
          <h3>Total Income</h3>
          <h2>₹80,000</h2>
        </div>

        <div className="card expense-card">
          <div className="icon">💸</div>
          <h3>Total Expense</h3>
          <h2>₹30,000</h2>
        </div>

        <div className="card saving-card">
          <div className="icon">💎</div>
          <h3>Savings</h3>
          <h2>₹20,000</h2>
        </div>

      </div>

      {/* Chart */}
            <Notification />


      <IncomeChart />

<ExpensePieChart />

      {/* AI Insight */}

      <div className="ai-box">

        <h2>🤖 AI Financial Insights</h2>

        <ul>

          <li>✅ Your savings increased by 12% this month.</li>

          <li>🍔 Food expenses are higher than last month.</li>

          <li>💡 Reduce restaurant spending to save ₹3,000.</li>

          <li>📊 Budget utilization: 68%</li>

        </ul>

      </div>

      {/* Quick Actions */}

      <div className="actions">

        <h2>⚡ Quick Actions</h2>

        <div className="action-buttons">

          <button className="action-btn">➕ Add Income</button>

          <button className="action-btn">➖ Add Expense</button>

          <button className="action-btn">📊 Reports</button>

          <button className="action-btn">🤖 AI Analysis</button>

        </div>

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

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>07 Jul 2026</td>

              <td>💼 Salary</td>

              <td className="income">+ ₹50,000</td>

              <td>
                <span className="status success">
                  Completed
                </span>
              </td>

            </tr>

            <tr>

              <td>06 Jul 2026</td>

              <td>🍔 Food</td>

              <td className="expense">
                - ₹450
              </td>

              <td>
                <span className="status expense-status">
                  Expense
                </span>
              </td>

            </tr>

            <tr>

              <td>05 Jul 2026</td>

              <td>🛍 Shopping</td>

              <td className="expense">
                - ₹2,100
              </td>

              <td>
                <span className="status expense-status">
                  Expense
                </span>
              </td>

            </tr>

            <tr>

              <td>04 Jul 2026</td>

              <td>🚗 Travel</td>

              <td className="expense">
                - ₹1,200
              </td>

              <td>
                <span className="status expense-status">
                  Expense
                </span>
              </td>

            </tr>

            <tr>

              <td>03 Jul 2026</td>

              <td>💡 Electricity</td>

              <td className="expense">
                - ₹850
              </td>

              <td>
                <span className="status pending">
                  Pending
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Monthly Expense Summary */}

      <div className="summary-box">

        <h2>📈 Monthly Expense Summary</h2>

        <div className="summary-item">

          <span>🍔 Food</span>

          <progress value="60" max="100"></progress>

        </div>

        <div className="summary-item">

          <span>🛍 Shopping</span>

          <progress value="40" max="100"></progress>

        </div>

        <div className="summary-item">

          <span>🚗 Travel</span>

          <progress value="25" max="100"></progress>

        </div>

        <div className="summary-item">

          <span>💡 Bills</span>

          <progress value="35" max="100"></progress>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;