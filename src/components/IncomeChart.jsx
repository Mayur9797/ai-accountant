import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    Income: 50000,
    Expense: 30000,
  },
  {
    month: "Feb",
    Income: 65000,
    Expense: 35000,
  },
  {
    month: "Mar",
    Income: 70000,
    Expense: 42000,
  },
  {
    month: "Apr",
    Income: 60000,
    Expense: 38000,
  },
  {
    month: "May",
    Income: 80000,
    Expense: 50000,
  },
  {
    month: "Jun",
    Income: 90000,
    Expense: 60000,
  },
];

function IncomeChart() {
  return (
    <div className="chart-container">

      <h2>📊 Income vs Expense Overview</h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="Income"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />

          <Bar
            dataKey="Expense"
            fill="#ef4444"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default IncomeChart;