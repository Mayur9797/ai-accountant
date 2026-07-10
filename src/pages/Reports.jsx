import "../styles/Reports.css";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Reports() {
  const barData = [
    { month: "Jan", income: 80000, expense: 30000 },
    { month: "Feb", income: 75000, expense: 28000 },
    { month: "Mar", income: 90000, expense: 40000 },
    { month: "Apr", income: 82000, expense: 35000 },
    { month: "May", income: 95000, expense: 42000 },
  ];

  const pieData = [
    { name: "Food", value: 30 },
    { name: "Shopping", value: 25 },
    { name: "Travel", value: 20 },
    { name: "Bills", value: 15 },
    { name: "Others", value: 10 },
  ];

  const COLORS = [
    "#2563eb",
    "#22c55e",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
  ];

  return (
    <div className="reports">

      <h1>📊 Financial Reports</h1>

      {/* Summary Cards */}
      <div className="report-cards">

        <div className="report-card income">
          <h3>Total Income</h3>
          <p>₹4,22,000</p>
        </div>

        <div className="report-card expense">
          <h3>Total Expense</h3>
          <p>₹1,75,000</p>
        </div>

        <div className="report-card savings">
          <h3>Total Savings</h3>
          <p>₹2,47,000</p>
        </div>

        <div className="report-card profit">
          <h3>Net Profit</h3>
          <p>58%</p>
        </div>

      </div>

      {/* Charts */}
      <div className="charts">

        <div className="chart-box">

          <h2>Income vs Expense</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#22c55e" />
              <Bar dataKey="expense" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="chart-box">

          <h2>Expense Distribution</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Monthly Report */}
      <div className="report-table">

        <h2>Monthly Financial Report</h2>

        <table>

          <thead>
            <tr>
              <th>Month</th>
              <th>Income</th>
              <th>Expense</th>
              <th>Savings</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>January</td>
              <td>₹80,000</td>
              <td>₹30,000</td>
              <td>₹50,000</td>
            </tr>

            <tr>
              <td>February</td>
              <td>₹75,000</td>
              <td>₹28,000</td>
              <td>₹47,000</td>
            </tr>

            <tr>
              <td>March</td>
              <td>₹90,000</td>
              <td>₹40,000</td>
              <td>₹50,000</td>
            </tr>

            <tr>
              <td>April</td>
              <td>₹82,000</td>
              <td>₹35,000</td>
              <td>₹47,000</td>
            </tr>

            <tr>
              <td>May</td>
              <td>₹95,000</td>
              <td>₹42,000</td>
              <td>₹53,000</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* Buttons */}
      <div className="download-buttons">

        <button>📄 Download PDF</button>

        <button>📊 Export Excel</button>

      </div>

      {/* AI Analysis */}
      <div className="analysis">

        <h2>🤖 AI Financial Analysis</h2>

        <ul>
          <li>Income increased by 15% this month.</li>
          <li>Food expenses are higher than last month.</li>
          <li>You saved ₹53,000 this month.</li>
          <li>Recommendation: Reduce entertainment expenses by 10%.</li>
        </ul>

      </div>

    </div>
  );
}

export default Reports;