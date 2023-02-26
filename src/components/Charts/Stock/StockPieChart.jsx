import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './StocksPieChart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Hats', 'Jackets', 'Sneakers', 'Men' , 'Women'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 9 ,5],
      backgroundColor: [
        'rgba(81, 91, 103,0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(128, 171, 54,0.8)',
        'rgba(188, 181, 173,0.8)',
        'rgba(52, 67, 120,0.8)'

      ],
      borderColor: [
        'white',  
        'white',
        'white',
        'white',
        'white',
        ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  animation: {
    duration: 2500,
    delay: 1000,
  },
}

const StockPiechart = () => {
  return (
    <div className="stockchart">   
        <Pie data={data} options={options} />
    </div>
    
  );
}

export default StockPiechart;