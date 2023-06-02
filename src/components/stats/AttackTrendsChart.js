import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', attacks: 50 },
  { month: 'Feb', attacks: 80 },
  { month: 'Mar', attacks: 60 },
  // Add more data entries for each month
];

function AttackTrendsChart() {
  return (
    <div>
      <h2>Attack Trends</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="attacks" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default AttackTrendsChart;
