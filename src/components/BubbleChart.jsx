// Task 3

import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  const bubbleData = {
    datasets: [
      {
        label: 'Sales, Profits, Expenses',
        data: data.sales.map((sales, i) => ({
          x: data.expenses[i],
          y: data.profits[i],
          r: sales / 10,
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return <ChartComponent type="bubble" data={bubbleData} options={options} />;
};

export default BubbleChart;