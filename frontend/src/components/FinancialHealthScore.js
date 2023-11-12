// FinancialHealthScore.js
import React from 'react';

const FinancialHealthScore = ({ score }) => {
  return (
    <div className='health-score'>
      <h2>Financial Health Score</h2>
      <p>{score}</p>
    </div>
  );
};

export default FinancialHealthScore;
