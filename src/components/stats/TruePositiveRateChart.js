import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Mon', rate: 0.8 },
  { day: 'Tue', rate: 0.85 },
  { day: 'Wed', rate: 0.9 },
  // Add more data entries for each day
];

function TruePositiveRateChart() {
  return (
    <div>
      <h2>True Positive Rate</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default TruePositiveRateChart;
