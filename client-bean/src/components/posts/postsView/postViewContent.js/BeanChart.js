import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function BeanChart({ beanRatio }) {
  console.log(beanRatio);
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'grey'],
    datasets: [
      {
        data: [10, 20, 15, 20],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: 'right',
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <Doughnut data={data} options={options} style={{ position: 'relative', height: '110px' }} />
  );
}

export default BeanChart;
