import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const LineChart = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const dataset = [1,24,13,34,45,6,7,8]
    const data = {
      labels,
      datasets: [
        {
          label: '',
          data: dataset,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
        },
      ],
    };
  
    const options = {
      scales: {
        y:{
            ticks: {
              beginAtZero: true,
            },
          },
      },
    };


  return (
    <>
        <Line data={data} options={options}/>
    </>
  )
}

export default LineChart;