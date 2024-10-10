import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [data, setData] = useState({
    labels: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4'],
    datasets: [
      {
        label: 'Production Output',
        data: [0, 0, 0, 0],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        datasets: [{
          ...prevData.datasets[0],
          data: prevData.datasets[0].data.map(() => Math.floor(Math.random() * 100)),
        }],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Production Output by Machine',
      },
    },
  };

  return (
    <div>
      <h2>Production Dashboard</h2>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}

export default Dashboard;