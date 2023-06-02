import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'; // Assuming Recharts library is used

const data = [
  { name: 'DDoS', value: 30 },
  { name: 'SQL Injection', value: 20 },
  { name: 'XSS', value: 10 },
  // Add more data entries for each attack type
];

function AttackTypesChart() {
  return (
    <div>
      <h2>Attack Types</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default AttackTypesChart;