import React from 'react';
import { WorldMap } from 'react-svg-worldmap';

const data = [
  { country: 'US', value: 30 },
  { country: 'CN', value: 20 },
  { country: 'RU', value: 15 },
  // Add more data entries for each country
];

function AttackAttributionChart() {
  return (
    <div className="chart-item">
      <div className="world-map-container">
        <WorldMap color="purple" value-suffix="people" size="lg" data={data} className="world-map-chart" />
      </div>
    </div>
  );
}

export default AttackAttributionChart;
