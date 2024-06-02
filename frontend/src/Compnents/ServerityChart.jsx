/* eslint-disable react/prop-types */

import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

function SeverityChart({ data }) {
  // Counting alerts by severity
  const severityCounts = {};
  data.forEach(alert => {
    const severity = alert.alert?.severity; // Optional chaining to prevent errors
    if (severity) {
      if (!severityCounts[severity]) {
        severityCounts[severity] = 0;
      }
      severityCounts[severity]++;
    }
  });

  // Formatting data for recharts
  const chartData = Object.keys(severityCounts).map(severity => ({
    severity: severity,
    count: severityCounts[severity]
  }));

  // Define colors for the different severities
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  return (
    <div className="mt-4 " style={{ width: 'calc(30vw - 30px)', padding: '5px' }}>
      <h2 className="text-primary">Severity Distribution</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="severity"
              cx="50%"
              cy="50%"
              outerRadius={100}
              // fill="#8884d8"
              label
            >
              {
                chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length] }/>
                ))
              }
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SeverityChart;
