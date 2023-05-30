import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = () => {
  // Dummy data for demonstration
  const data = [
    { date: '2023-05-01', GOOGL: 100, APPL: 80, AMZ: 78, IBM:89 },
    { date: '2023-05-02', GOOGL: 120, APPL: 90 , AMZ: 56, IBM:78 },
    { date: '2023-05-03', GOOGL: 115, APPL: 85 , AMZ: 87, IBM:89 },
    { date: '2023-05-04', GOOGL: 130, APPL: 100, AMZ: 85, IBM:23  },

  ];

  return (
    <div className='container-fluid mt-5'>
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="GOOGL" stroke="green" strokeWidth={1} />
        <Line type="monotone" dataKey="APPL" stroke="blue" strokeWidth={1} />
        <Line type="monotone" dataKey="AMZ" stroke="red" strokeWidth={1} />
        <Line type="monotone" dataKey="IBM" stroke="brown" strokeWidth={1} />
      </LineChart>
    </div>
  );
};

export default Graph;