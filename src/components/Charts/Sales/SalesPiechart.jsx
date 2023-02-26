import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './SalesPiechart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Hats', 'Jackets', 'Sneakers'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  animation: {
    duration: 2000,
    delay: 1500,
  },
}

const SalesPiechart = () => {
  return (
    <div className="saleschart">   
        <Pie data={data} options={options} />
    </div>
    
  );
}

export default SalesPiechart;