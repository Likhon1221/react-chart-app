// Task 3

import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  const lineData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Profits',
        data: data.profits,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return <ChartComponent type="line" data={lineData} options={options} />;
};

export default LineChart;