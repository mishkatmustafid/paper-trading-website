import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = () => {
  // Dummy data for demonstration
  const data = [
    { date: '2023-05-01', stockA: 100, stockB: 80, stockC: 78, stockD:89 },
    { date: '2023-05-02', stockA: 120, stockB: 90 , stockC: 56, stockD:78 },
    { date: '2023-05-03', stockA: 115, stockB: 85 , stockC: 87, stockD:89 },
    { date: '2023-05-04', stockA: 130, stockB: 100, stockC: 85, stockD:23  },
    { date: '2023-05-05', stockA: 125, stockB: 95 , stockC: 56, stockD:18 },
  ];

  return (
    <div className='container'>
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="stockA" stroke="green" strokeWidth={2} />
        <Line type="monotone" dataKey="stockB" stroke="blue" strokeWidth={2} />
        <Line type="monotone" dataKey="stockc" stroke="red" strokeWidth={2} />
        <Line type="monotone" dataKey="stockD" stroke="brown" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Graph;