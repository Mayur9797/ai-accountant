import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Income",
    amount: 80000,
  },
  {
    name: "Expense",
    amount: 30000,
  },
  {
    name: "Savings",
    amount: 20000,
  },
];

function IncomeChart() {
  return (
    <div className="chart-container">
      <h2>📊 Financial Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="amount" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IncomeChart;