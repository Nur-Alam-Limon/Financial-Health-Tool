import React from 'react';
import Chart from 'react-apexcharts';

const Visualization = ({ financialScore }) => {
  const chartOptions = {
    labels: ['Financial Score'],
    colors: ['#5863F8'], // Adjust color as needed
    plotOptions: {
        radialBar: {
          dataLabels: {
            value: {
              fontSize: '18px', // Adjust font size
              color: '#fff', // Adjust text color
            },
          },
        },
      },
  };

  const chartSeries = [financialScore];

  return (
    <div className='visualizer'>
      <h2>Score Visualization</h2>
      <Chart options={chartOptions} series={chartSeries} type="radialBar" height={350} />
    </div>
  );
};

export default Visualization;
