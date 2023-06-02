import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Low', value: 20 },
  { name: 'Medium', value: 15 },
  { name: 'High', value: 10 },
];

function AttackSeverityChart() {
  return (
    <div>
      <h2>Attack Severity</h2>
      <PieChart width={500} height={300}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={150} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default AttackSeverityChart;