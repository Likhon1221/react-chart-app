// Task 3

import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const barData = {
    labels: data.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return <ChartComponent type="bar" data={barData} options={options} />;
};

export default BarChart;