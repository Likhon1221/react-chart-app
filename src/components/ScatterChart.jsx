// Task 3

import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({ data }) => {
  const scatterData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((x, i) => ({ x, y: data.profits[i] })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return <ChartComponent type="scatter" data={scatterData} options={options} />;
};

export default ScatterChart;