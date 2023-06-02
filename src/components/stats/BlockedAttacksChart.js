import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { date: '2023-01-01', count: 5 },
  { date: '2023-01-02', count: 10 },
  { date: '2023-01-03', count: 8 },
  // Add more data entries for each date
];

function BlockedAttacksChart() {
  return (
    <div>
      <h2>Blocked Attacks</h2>
      <AreaChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}

export default BlockedAttacksChart;
