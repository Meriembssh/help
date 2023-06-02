import React from 'react'
import '../styles/Statistics.css'
import AttackTypesChart from '../components/stats/AttackTypesChart';
import AttackSeverityChart from '../components/stats/AttackSeverityChart';
import AttackTrendsChart from '../components/stats/AttackTrendsChart';
import FalsePositiveRateChart from '../components/stats/FalsePositiveRateChart';
import FalsePositiveAnalysisChart from '../components/stats/FalsePositiveAnalysisChart';
import TruePositiveRateChart from '../components/stats/TruePositiveRateChart';
import AttackAttributionChart from '../components/stats/AttackAttributionChart';
import BlockedAttacksChart from '../components/stats/BlockedAttacksChart';

function Statistics() {
  return (
    <div className="statistics-page">
      <h1>Statistics</h1>
      <div className="grid-container">
        <div className="grid-item chart-item">
          <AttackTypesChart />
        </div>
        <div className="grid-item chart-item">
          <AttackSeverityChart />
        </div>
        <div className="grid-item chart-item">
          <AttackTrendsChart />
        </div>
        <div className="grid-item chart-item">
          <FalsePositiveRateChart />
        </div>
        <div className="grid-item chart-item">
          <FalsePositiveAnalysisChart />
        </div>
        <div className="grid-item chart-item">
          <TruePositiveRateChart />
        </div>
        <div className="grid-item chart-item">
          <AttackAttributionChart />
        </div>
        <div className="grid-item chart-item">
          <BlockedAttacksChart />
        </div>
      </div>
    </div>
  );
}

export default Statistics