import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const ChartWrap = styled.div`
  position: relative;
  width: 270px;
  height: 100%;
`;

function BeanChart({ beanRatio }) {
  const data = {
    labels: Object.keys(beanRatio),
    datasets: [
      {
        data: Object.values(beanRatio),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
    text: '20',
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
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
    <ChartWrap>
      <Doughnut
        data={data}
        options={options}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-20%, -50%)',
        }}
      />
    </ChartWrap>
  );
}

export default BeanChart;
