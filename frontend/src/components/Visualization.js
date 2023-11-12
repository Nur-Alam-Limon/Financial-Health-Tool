import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Visualization = ({ scores, date }) => {
  const chartOptions = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false
      },
      tooltip: {
        enabled: false,
      },
      toolbar: {
        show: false 
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight', 
      width: 3,
    },
    grid: {
      row: {
        colors: ['#E3E3E3', '#fff'],
        opacity: 1
      },
    },
    xaxis: {
      categories: date,
      labels: {
        style: {
          colors: '#E1E2EF', 
          fontSize: '12px',
        }
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        style: {
          colors: '#E1E2EF', 
          fontSize: '12px',
        }
      },
      tickAmount: 5,
    }
  }

  const chartSeries = [{
    name: "Health",
    data: scores
  }];

  return (
    <div className='visualizer'>
      <h2>Financial Health Graph</h2>
      <ReactApexChart options={chartOptions} series={chartSeries} type="line" />
    </div>
  );
};

export default Visualization;
