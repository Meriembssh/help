import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { reason: 'Misconfigured Rule', count: 15 },
  { reason: 'Network Glitch', count: 8 },
  { reason: 'Software Bug', count: 5 },
  // Add more data entries for each reason
];

function FalsePositiveAnalysisChart() {
  return (
    <div>
      <h2>False Positive Analysis</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="reason" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default FalsePositiveAnalysisChart;
