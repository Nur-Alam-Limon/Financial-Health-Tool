import React from 'react';
import Chart from 'react-apexcharts';

const FinancialHealthScore = ({ financialScore }) => {
  const chartOptions = {
    labels: ['Financial Score'],
    colors: ['#5863F8'],
    plotOptions: {
        radialBar: {
          dataLabels: {
            value: {
              fontSize: '28px', 
              color: '#fff',
            },
          },
        },
      },
  };

  const chartSeries = [financialScore];

  return (
    <div className='visualizer'>
      <h2>Financial Health Score</h2>
      <Chart options={chartOptions} series={chartSeries} type="radialBar" height={400} />
    </div>
  );
};

export default FinancialHealthScore;
